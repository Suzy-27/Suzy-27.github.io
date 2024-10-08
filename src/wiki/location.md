---
icon: house
title: 据点情报
head:
    - - style
      - type: text/css
      - .vp-page-title h1 { display:none; }
---
## <div class="text-bg-grey"> 据点情报 <i class="fa-solid fa-house" style="color: lightSteelblue"></i></div>

<DetailsButton label="持有的房产" :isScrollable="true" margin="15px 0 15px 0">
  <CheckableLocationTable :data="ownedLocationData" tableId="owned"/>
</DetailsButton>

<DetailsButton label="ARCANA关联" :isScrollable="true" margin="15px 0 15px 0">
  <CheckableLocationTable :data="arcanaLocationData" tableId="arcana"/>
</DetailsButton>

<DetailsButton label="藏匿车库" :isScrollable="true" margin="15px 0 15px 0">
  <CheckableLocationTable :data="hideoutLocationData" tableId="hideout"/>
</DetailsButton>

<DetailsButton label="其他" :isScrollable="true">
  <CheckableLocationTable :data="otherLocationData" tableId="other"/>
</DetailsButton>

--- {.margin-top-bot}

<DetailsButton label="过去房产" :isScrollable="true">
  <CheckableLocationTable :data="pastLocationData" tableId="past">
    <template #footer>
      ⋇ 虽未经证实，但没有使用预定，因此归类为过去房产
    </template>
  </CheckableLocationTable>
</DetailsButton>

<script setup>
  import CheckableLocationTable from "@CheckableLocationTable";
  import { ownedLocationData, arcanaLocationData, hideoutLocationData, otherLocationData, pastLocationData } from "@LocationData";
</script>