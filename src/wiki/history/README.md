---
icon: calendar
title: 历史
head:
    - - style
      - type: text/css
      - .vp-page-title h1 { display:none; }
next: ./episode/
---
## <div class="text-bg-grey"> 历史 <i class="fa-solid fa-calendar" style="color: lightSteelblue"></i></div>

### <div class="text-bg-white"> 年表 </div>
#### <span class="underline-blue">◆ 第 1 部&emsp; </span>
<div class="history-header header-highlight1">&emsp;序章&emsp;出租车司机篇</div>
<DetailsButton :isScrollable="true">
  <DataTable :headers="headers" :headersInitState="headersInitState" :data="part1PrologueData"/>
</DetailsButton>

<div class="history-header header-highlight2">&emsp;1 章&emsp;帮派 · 黑医生篇</div>
<DetailsButton :isScrollable="true">
  <DataTable :headers="headers" :headersInitState="headersInitState" :data="part1Chapter1Data" />
</DetailsButton>

<div class="history-header header-highlight3">&emsp;2 章&emsp;暗金 · 赌场篇</div>
<DetailsButton :isScrollable="true">
  <DataTable :headers="headers" :headersInitState="headersInitState" :data="part1Chapter2Data" />
</DetailsButton>

<div class="history-header header-highlight4">&emsp;3 章&emsp;地下产业 · 外交篇</div>
<DetailsButton :isScrollable="true">
  <DataTable :headers="headers" :headersInitState="headersInitState" :data="part1Chapter3Data" />
</DetailsButton>

<div class="history-header header-highlight5">&emsp;4 章&emsp;后继者育成篇</div>
<DetailsButton :isScrollable="true">
  <DataTable :headers="headers" :headersInitState="headersInitState" :data="part1Chapter4Data" />
</DetailsButton>

#### <span class="underline-blue">◆ 第 2 部&emsp; </span>
<div class="history-header header-highlight1">&emsp;1 章&emsp;退出帮派 · 逃亡生活篇</div>
<DetailsButton :isScrollable="true">
  <DataTable :headers="headers" :headersInitState="headersInitState" :data="part2Chapter1Data" />
</DetailsButton>

<div class="history-header header-highlight2">&emsp;2 章&emsp;个人医 · 暗中活跃白市民篇</div>
<DetailsButton :isScrollable="true">
  <DataTable :headers="headers" :headersInitState="headersInitState" :data="part2Chapter2Data" />
</DetailsButton>

<div class="history-header header-highlight3">&emsp;3 章&emsp;ARCANA篇</div>
<DetailsButton :isScrollable="true">
  <DataTable :headers="headers" :headersInitState="headersInitState" :data="part2Chapter3Data" />
</DetailsButton>

<div class="history-header header-highlight4">&emsp;4 章&emsp;狩猎篇</div>
<DetailsButton :isCollapsed="false" :isScrollable="true">
  <DataTable :headers="headers" :headersInitState="headersInitState" :data="part2Chapter4Data" />
</DetailsButton>

<script setup>
  import DataTable from "@DataTable";
  import { 
    part1PrologueData, 
    part1Chapter1Data, 
    part1Chapter2Data, 
    part1Chapter3Data, 
    part1Chapter4Data, 
    part2Chapter1Data, 
    part2Chapter2Data, 
    part2Chapter3Data, 
    part2Chapter4Data, 
    headers,
    headersInitState,
    } from "@HistoryData";
</script>