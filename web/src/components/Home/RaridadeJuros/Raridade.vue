<script setup>
  defineProps({   
  tier1: String,
  tier2: String,
  tier3: String,
  tier4: String,
  tier5: String
  })
</script>

<template>
  <div class="info__chance__t1 flex">
    <div class="box tier1"></div>
    <p class="info__chance__chance">{{tier1}}%</p>
  </div>

  <div class="info__chance__t2 flex">
    <div class="box tier2"></div>
    <p class="info__chance__chance">{{tier2}}%</p>
  </div>

  <div class="info__chance__t3 flex">
    <div class="box tier3"></div>
    <p class="info__chance__chance">{{tier3}}%</p>
  </div>

  <div class="info__chance__t4 flex">
    <div class="box tier4"></div>
    <p class="info__chance__chance">{{tier4}}%</p>
  </div>

  <div class="info__chance__t5 flex">
    <div class="box tier5"></div>
    <p class="info__chance__chance">{{tier5}}%</p>
  </div>
</template>

<script>
export default {
    name: 'RaridadeNivel'
  }
</script>

<style>

.box {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #fff;
  }

  .tier1 {
    background-color: var(--tier1);
  }
  .tier2 {
    background-color: var(--tier2);
  }
  .tier3 {
    background-color: var(--tier3);
  }
  .tier4 {
    background-color: var(--tier4);
  }
  .tier5 {
    background-color: var(--tier5);
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }

</style>