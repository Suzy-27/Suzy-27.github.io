---
icon: image
title: 画廊
head:
    - - style
      - type: text/css
      - .vp-page-title h1 { display:none; }
article: false
---
## <div class="text-bg-grey"> 画廊 <i class="fa-solid fa-image" style="color: lightSteelblue"></i></div>

::: details Logo、贴纸
<DataTableVertical :data="logoData" :colStyle="colStyle" />

:::
::: details TwiX画像
<DataTableVertical :data="twiXData" :colStyle="colStyle" />

:::
::: details 周边产品
<DataTableVertical :data="goodsData" :colStyle="goodsColStyle" />

:::

<script setup>
  import DataTableVertical from "@DataTableVertical";
  import { 
    logoData,
    twiXData,
    goodsData,
    colStyle,
    goodsColStyle,
    } from "@GalleryData";
</script>