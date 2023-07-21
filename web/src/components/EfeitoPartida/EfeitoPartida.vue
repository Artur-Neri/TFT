<script setup>
  defineProps({
    nome: String,
    imagem: String
  })
</script>

<template>
  <div class="efeito__content__item" :class="nome">
    <img :src="imagem" :alt="nome" class="efeito__item__img">
    <div class="efeito__content__text">
      <h3 class="efeito__item__title">{{nome}}</h3>
      <p class="efeito__item__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dicta corporis repellat excepturi ab impedit ut ipsa consectetur, nobis molestiae illo earum provident corrupti dolore vitae voluptates ducimus. Eum, sequi.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dicta corporis repellat excepturi ab impedit ut ipsa consectetur, nobis molestiae illo earum provident corrupti dolore vitae voluptates ducimus. Eum, sequi.
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

  .noxus {
    background-color: var(--vt-c-noxus);
  }

  .ionia {
    background-color: var(--vt-c-ionia);
  }

  .efeito__content__item{
    display: flex;
    /* flex-direction: column; */
    align-content: center;
    justify-content: center;
    padding: 10px;
    width: 500px;
    /* border: 3px solid rgb(163, 133, 0); */
    /* background-color: var(--vt-c-noxus); */
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
    /* border-top: 3px solid rgb(163, 133, 0); */
    /* border-bottom: 3px solid rgb(163, 133, 0); */
  }

  .efeito__item__description {
    height: 100px;
    width: 100%;
    padding: 0 10px;
    font-weight: 500;
    overflow: auto;
  }
</style>