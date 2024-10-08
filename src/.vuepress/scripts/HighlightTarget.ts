import { defineComponent, onMounted } from 'vue';

export default (
    onMounted(() => {
    const targetId = sessionStorage.getItem('highlightTarget');
    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        // Reset classes before reapplying highlight
        target.classList.remove('highlight', 'fade-out');
        
        // Apply the highlight class for the grey background
        setTimeout(() => {
          target.classList.add('highlight');
        }, 0);

        // After 1 second, switch to the fade-out class
        setTimeout(() => {
          target.classList.replace('highlight', 'fade-out');
        }, 1000); // Delay before fade-out transition
      }
      sessionStorage.removeItem('highlightTarget');
    }
  })
);