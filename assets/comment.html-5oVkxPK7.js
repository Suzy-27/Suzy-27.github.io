import{_ as c,c as s,a as e,b as a,d as i,o as m}from"./app-DEFvrxIM.js";const u={mounted(){const n=()=>{const o=document.querySelector("#wl-edit"),r=document.querySelector("#wl-nick"),l=document.querySelector("#wl-mail");o&&o.setAttribute("placeholder","欢迎友好评论交流"),r&&r.setAttribute("placeholder","选填"),l&&l.setAttribute("placeholder","选填，被回复时会收到邮件提醒")};new MutationObserver(()=>{n()}).observe(document.body,{childList:!0,subtree:!0}),n()}};function p(n,t,o,r,l,d){return m(),s("div",null,[t[0]||(t[0]=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"使用说明"),e("ul",null,[e("li",null,[e("p",null,"此处可自由评论交流，评论时请遵守礼仪，如发现有违规或攻击性言论会删评论。")]),e("li",null,[e("p",null,[a("如有反馈或者捉虫等，请回复"),e("span",{class:"wl-c-badge"},"置顶"),a("评论")])])]),e("br")],-1)),t[1]||(t[1]=e("hr",null,null,-1)),i(` @waline/client/component

<Waline :serverURL="serverURL" :path="path" lang="zh-CN" :imageUploader="false" />

<script setup>
  import { Waline } from '@waline/client/component';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  import '@waline/client/style';

  const serverURL = 'https://waline-comments-pearl.vercel.app/';
  const path = computed(() => useRoute().path);
<\/script> `)])}const f=c(u,[["render",p],["__file","comment.html.vue"]]),v=JSON.parse('{"path":"/comment.html","title":"评论","lang":"zh-CN","frontmatter":{"title":"评论","comment":true},"headers":[],"git":{"createdTime":1730396358000,"updatedTime":1730396358000,"contributors":[{"name":"Suzy","email":"sunyangsusie@163.com","commits":1}]},"filePathRelative":"comment.md","localizedDate":"2024年10月31日","excerpt":""}');export{f as comp,v as data};
