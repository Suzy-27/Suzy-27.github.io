<template>
    <div 
    class="slider" 
    @touchstart="startTouch" 
    @touchmove="moveTouch" 
    @mousedown="startDrag" 
    @mouseup="endDrag" 
    @mouseleave="endDrag"
    @mousemove="moveDrag"
  >
    <transition name="fade">
      <img :src="currentImage" alt="Image" class="image" v-if="showImage" key="currentImage" draggable="false" />
    </transition>
    <div class="buttons">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="switchImage(index)"
        :class="{ active: currentImageIndex === index }"
        role="tab"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          "/wiki-assets/top/top1.png",
          "/wiki-assets/top/top2.png",
          "/wiki-assets/top/top3.png",
          "/wiki-assets/top/top4.png",
          "/wiki-assets/top/top5.png"
        ],
        currentImageIndex: 0,
        startX: 0,
        isDragging: false,
        interval: null,
        showImage: true
      };
    },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    }
  },
  methods: {
    switchImage(index) {
      this.currentImageIndex = index;
      this.resetAutoSlide();
    },
    nextImage() {
      this.showImage = false; // Start fade out
      setTimeout(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.showImage = true; // Start fade in
      }, 300); // Delay for fade-out effect
    },
    previousImage() {
      this.showImage = false; // Start fade out
      setTimeout(() => {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.showImage = true; // Start fade in
      }, 300); // Delay for fade-out effect
    },
    startTouch(event) {
      this.startX = event.touches[0].clientX;
      this.pauseAutoSlide();
    },
    moveTouch(event) {
      if (!this.startX) return;
      const endX = event.touches[0].clientX;
      this.handleSwipe(endX);
    },
    startDrag(event) {
      this.startX = event.clientX;
      this.isDragging = true;
      this.pauseAutoSlide();
    },
    moveDrag(event) {
      if (!this.isDragging) return;
      const endX = event.clientX;
      this.handleSwipe(endX);
    },
    endDrag() {
      this.startX = 0;
      this.isDragging = false;
      this.resumeAutoSlide();
    },
    handleSwipe(endX) {
      const threshold = 50; // Swipe sensitivity
      if (this.startX - endX > threshold) {
        this.nextImage();
        this.resetDrag();
      } else if (this.startX - endX < -threshold) {
        this.previousImage();
        this.resetDrag();
      }
    },
    resetDrag() {
      this.startX = 0;
      this.isDragging = false;
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextImage, 5000); // Change image every 5 seconds
    },
    pauseAutoSlide() {
      clearInterval(this.interval);
      this.interval = null;
    },
    resumeAutoSlide() {
      this.pauseAutoSlide(); // Ensure any existing interval is cleared before starting a new one
      this.startAutoSlide();
    },
    resetAutoSlide() {
      this.pauseAutoSlide();
      this.startAutoSlide();
    }
  },
  mounted() {
    this.startAutoSlide(); // Start automatic sliding on component mount
  },
  beforeDestroy() {
    this.pauseAutoSlide(); // Stop automatic sliding when component is destroyed
  }
};
</script>

  
<style scoped>
.slider {
  text-align: left;
  max-width: fit-content;
  max-height: fit-content;
}
.image {
  max-width: 100%;
  width: 320px; 
  height: 720px;
  -webkit-user-drag: none;
  transition: opacity 0.5s; /* Fade transition */
  opacity: 1; /* Start fully visible */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0; /* Fade out */
}
.buttons {
  margin: 1em;
  text-align: center;
  vertical-align: middle;
}
button {
  margin-right: 1px;
  border-radius: 5px;
  border: 1px solid var(--vp-c-border);
  box-shadow: 2px 2px 6px var(--vp-c-shadow);
  background: var(--vp-c-control);
  padding: 5px 12px;
}
button.active {
  font-weight: bold;
  background: var(--vp-c-accent-soft);
  color: var(--vp-c-accent-text);
}
</style>
  