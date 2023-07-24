<script setup>
  defineProps({
    origem: String,
    nome: String,
    imagem: String,
    texto: String
  })
</script>

<template>
  <div class="efeito__content__item" :class="origem">
    <img :src="imagem" :alt="nome" class="efeito__item__img">
    <div class="efeito__content__text">
      <h3 class="efeito__item__title">{{nome}}</h3>
      <p class="efeito__item__description">
       {{texto}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EfeitoPartida'
  }
</script>

<style>

  .efeito__content__item{
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 10px;
    width: 400px;
    transition: .3s ease-in-out;
  }

  .efeito__item__img{
    width: 20%;
    align-self: center;
  }

  .efeito__content__text {
    width: 100%;
  }

  .efeito__item__title{
    font-family: var(--font-family-title);
    text-align: center;
    text-transform: capitalize;
  }

  .efeito__item__description {
    height: 100px;
    width: 100%;
    padding: 5px 10px;
    font-weight: 500;
    overflow: auto;
  }
</style>