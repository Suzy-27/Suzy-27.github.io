---
icon: user-tie
title: 服装情报
head:
    - - style
      - type: text/css
      - .vp-page-title h1 { display:none; }
article: false
---
## <div class="text-bg-grey"> 服装情报 <i class="fa-solid fa-user-tie" style="color: lightSteelblue"></i></div>

#### <span class="underline-blue">◆ 衣柜&ensp; </span>

::: details 衣服
<DataTableVertical :data="ownedClothesData" :colStyle="colStyle" />

:::

::: details 其他名义
<DataTableVertical :data="aliasClothesData" :colStyle="colStyle" />

::: 

::: details 变装
<DataTableVertical :data="pretenseClothesData" :colStyle="colStyle" />

:::

<br>

---

<br>

#### <span class="underline-blue">◆ 过去一览&ensp; </span>

::: details 过去的衣服
<DataTableVertical :data="pastClothesData" :colStyle="colStyle" />

:::
::: details 过去的变装
<DataTableVertical :data="pastPretenseClothesData" :colStyle="colStyle" />

:::

<script setup>
  import DataTableVertical from "@DataTableVertical";
  import { 
    ownedClothesData,
    aliasClothesData,
    pretenseClothesData,
    pastClothesData,
    pastPretenseClothesData,
    colStyle,
    } from "@ClothesData";
</script>