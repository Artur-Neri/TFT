<script setup>
  import campeaoApi from '../api/Campeoes/campeoes.json';

  defineProps({
  nome: String,
  imagem: String
})
</script>


<template>
  <div class="campeao"
  v-for="(campeao, index) in campeaoApi" :key="index"
  >
    <div class="campeoes__cabecalho">
      <h3>Tier {{index+1}}</h3>
      <div class="campeoes__custo">
        {{ index+1 }}
        <img src="" alt="coin">
      </div>
      <img :src="imagem" :alt="nome" :title="nome">
    </div>
  </div>
</template>

<style scoped>
  
</style>

<script>
  export default {
    name: 'CampeaoRaridade'
  }
  
</script>