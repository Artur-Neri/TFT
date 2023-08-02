<script setup>
  import efeitosApi from '/src/api/Itens/itens'
  import EfeitoContainer from './EfeitoContainer.vue';
  
  defineProps({
    id: String,
    nome: String,
    imagem: String
  })
</script>

<template>
    <div class="componentes__item">
    <div class="item__img__nome">
      <img :src="imagem" :alt="nome">
      <p>{{ nome }}</p>
    </div>

    <EfeitoContainer 

      :key="efeitosApi[1].componentes[id].nome"
      :efeitos="efeitosApi[1].componentes[id].efeitos"
    />
  </div>

</template>

<style scoped>

  .componentes__item {
    display: flex;
    height: 150px;
    width: 250px;
    background-color: #000;
    border-radius: 10px;
    border: 1px solid #ffffff65;
    overflow: hidden;
  }

  .item__img__nome {
    position: relative;
    width: 70%;
    border-right: 1px solid #ffffff65;
  }
  
  .item__img__nome img{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .item__img__nome p {
    position: absolute;
    text-shadow: 2px 2px 2px #000;
    font-family: var(--font-family-title);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    bottom: 2px;
    left: 5px;
  }
</style>

<script>
  export default {
  name: 'ComponentesBody'
  }
</script>