---
icon: car
title: 车辆情报
head:
    - - style
      - type: text/css
      - .vp-page-title h1 { display:none; }
---

## <div class="text-bg-grey"> 车辆情报 <i class="fa-solid fa-car" style="color: lightSteelblue"></i></div>

<p style="display: inline">持有车辆太多了现在正在整理中。</p><br>
<details style="display: inline">
    <summary class="details-title">> 关于转卖预定</summary><br>
    &ensp;最初的计划是把它们卖给店铺旁边的无人收购点，但在某PYC店员的 “你与其卖给那里不如卖给我”一句话后，就改变主意准备转卖给其他市民。现在还在把要卖的车全部修理完成并集中到Legion停车场的准备阶段。
</details>

#### <span class="underline-blue">◆ 持有车辆&ensp; </span>

<div class="date vehicle-margin-top">◎,〇,✕是無馬使用的分类基准</div>

<DetailsButton label="◎（常用）" :isScrollable="true" margin="0 0 15px 0">
  <CheckableVehicleTable :data="favoriteVehicleData" tableId="favorite"/>
</DetailsButton>

<DetailsButton label="〇" :isScrollable="true">
  <CheckableVehicleTable :data="generalVehicleData" tableId="general"/>
</DetailsButton>

<DetailsButton label="未分类" :isScrollable="true" margin="15px 0 15px 0">
  <CheckableVehicleTable :data="uncategorizedVehicleData" tableId="uncategorized"/>
</DetailsButton>

<DetailsButton label="✕（转卖预定）" :isScrollable="true" margin="15px 0 15px 0">
  <CheckableVehicleTable :data="resaleVehicleData" tableId="resale" />
</DetailsButton>

<DetailsButton label="飞机 · 船只" :isScrollable="true" margin="30px 0 15px 0">
  <CheckableVehicleTable :data="planeBoatData" tableId="airplane-boat"/>
</DetailsButton>

--- {.margin-top}

#### <span class="underline-blue">◆ 过去车辆&ensp; </span>

<DetailsButton label="借出" :isScrollable="true" margin="15px 0 15px 0">
  <CheckableVehicleTable :data="lendVehicleData" tableId="lend"/>
</DetailsButton>

<DetailsButton label="过去车辆" :isScrollable="true" margin="15px 0 15px 0">
  <CheckableVehicleTable :data="pastVehicleData" tableId="pastVehicle"/>
</DetailsButton>

<DetailsButton label="景品用车" :isScrollable="true" margin="15px 0 15px 0">
  <CheckableVehicleTable :data="prizeVehicleData" tableId="prize"/>
</DetailsButton>

<script setup>
import CheckableVehicleTable from "@CheckableVehicleTable";
import { favoriteVehicleData, generalVehicleData, uncategorizedVehicleData, resaleVehicleData, planeBoatData, lendVehicleData, pastVehicleData, prizeVehicleData } from "@VehicleData";
</script>