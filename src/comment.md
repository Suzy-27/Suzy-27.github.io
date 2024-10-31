---
title: 评论
comment: true
---

::: warning 使用说明

- 此处可自由评论交流，评论时请遵守礼仪，如发现有违规或攻击性言论会删评论。

- 如有反馈或者捉虫等，请回复<span class="wl-c-badge">置顶</span>评论

<br>

:::


---





<!-- @waline/client/component

<Waline :serverURL="serverURL" :path="path" lang="zh-CN" :imageUploader="false" />

<script setup>
  import { Waline } from '@waline/client/component';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  import '@waline/client/style';

  const serverURL = 'https://waline-comments-pearl.vercel.app/';
  const path = computed(() => useRoute().path);
</script> -->

<script>
// export default {
//   mounted() {
//     // Wait for the Waline element to be rendered
//     const observer = new MutationObserver(() => {
//       const commentBox = document.querySelector('#wl-edit');
//       if (commentBox) {
//         commentBox.setAttribute('placeholder', '欢迎友好评论交流');
//         observer.disconnect(); // Stop observing once the placeholder is changed
//       }
//     });

//     // Start observing the body for changes
//     observer.observe(document.body, { childList: true, subtree: true });
//   },
// };
export default {
  mounted() {
    const setPlaceholder = () => {
      const commentBox = document.querySelector('#wl-edit');
      const nickBox = document.querySelector('#wl-nick');
      const mailBox = document.querySelector('#wl-mail');
      if (commentBox) {
        commentBox.setAttribute('placeholder', '欢迎友好评论交流');
      }
      if (nickBox) {
        nickBox.setAttribute('placeholder', '选填');
      }
      if (mailBox) {
        mailBox.setAttribute('placeholder', '选填，被回复时会收到邮件提醒');
      }
    };

    // Create a MutationObserver to watch for changes in the body
    const observer = new MutationObserver(() => {
      setPlaceholder(); // Update the placeholder whenever a change is detected
    });

    // Start observing the body for changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Also set the placeholder initially
    setPlaceholder();
  },
};
</script>