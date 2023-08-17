<script setup>
defineProps({
  "nome" : { 
    type: String,
    required: false
  },
  "imagem" : { 
    type: String,
    required: false
  },
  "quant" : { 
    type: String,
    required: true
  },
  "max" : { 
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="caracteristica_ativa">
    <img :src="imagem" :alt="nome">
    <span>{{quant}}/{{max}}</span>
  </div>
</template>

<style scoped>
  .caracteristica_ativa {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 5px 0;
  }

  .caracteristica_ativa span{
    font-family: var(--vt-f-inter);
    font-size: var(--vt-f-p);
  }

  .caracteristica_ativa img {
    width: 30px;
    height: 30px;
    border: 1px solid white;
  }
</style>

<script>
export default {
name: 'CaracteristicaQuant'
}
</script>