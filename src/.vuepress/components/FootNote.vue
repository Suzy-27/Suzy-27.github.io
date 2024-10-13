<template>
  <div v-if="isWikiPage" :class="['footnote-style', { 'disable-div': isDisable }]">
    <p><b><i class="fa-solid fa-bell"></i>&ensp;注释</b></p>
    <p id="footnote-1-ref" class="footnote-link">
      <a href="#footnote-1" title="所有组织">
        <span class="footnote-number">*1</span>
        <span class="footnote-text"> 
          作为创始人所持有的职位。转让经营权后，有权作为名誉董事自由挂职和离职。
        </span>
      </a>
    </p>
    <p><b><i class="fa-solid fa-quote-left"></i>&ensp;译者有话讲</b></p>
    <p id="footnote-2-ref" class="footnote-link">
      <a href="#footnote-2" title="チャンク">
        <span class="footnote-number">[1]</span>
        <span class="footnote-text"> 
          暂时不知道怎么翻译，指的是只有市长（服主）权限才能发送的大屏红色警告文，经常被用在無馬说市长坏话被发现后的警告。
        </span>
      </a>
    </p>
    
    <p id="footnote-3-ref" class="footnote-link">
      <a href="#footnote-3" title="不义游戏">
        <span class="footnote-number">[2]</span>
        <span class="footnote-text"> 
          原文ブギウギ，大概率出自咒术回战。
        </span>
      </a>
    </p>
    
    <p id="footnote-4-ref" class="footnote-link">
      <a href="#footnote-4" title="幽灵子弹">
        <span class="footnote-number">[3]</span>
        <span class="footnote-text"> 
          原文ファントムバレット，不靠谱考察可能出自刀剑神域。
        </span>
      </a>
    </p>
    
    <p id="footnote-5-ref" class="footnote-link">
      <a href="#footnote-5" title="暗金無島君">
        <span class="footnote-number">[4]</span>
        <span class="footnote-text"> 
          原文闇金ナシジマくん，原型为暗金丑岛君 (闇金ウシジマくん)。
        </span>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "FootNote",
  computed: {
    isWikiPage() {
      return this.$route.path === "/wiki/"
    }
  },
  data() {
    return {
      isDisable: false
    }
  },
}
</script>

<style lang="scss" scoped>
.disable-div {
  display:none;
}
.footnote-style {
  position: relative;

  justify-content: space-evenly;

  padding-inline: 1rem;
  border-top: 1px solid var(--vp-c-border);
  padding-top: 2em;
  transition:
    border-top-color var(--vp-t-color),
    background var(--vp-t-color),
    padding var(--vp-t-transform);
}

.footnote-link:hover .footnote-number  {
  text-decoration: underline;
  text-underline-offset: 3px;

}
.footnote-text {
  color:var(--vp-c-text);
  text-decoration: none;
}
</style>