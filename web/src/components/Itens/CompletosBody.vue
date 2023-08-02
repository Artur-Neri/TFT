<script setup>
defineProps({
  nome: String,
  imagem: String,
  imagemComp1: String,
  imagemComp2: String
})
</script>

<template>
  <div class="completo__item">
    <h3>{{nome}}</h3>
    <div class="item__imgs">
      <img class="completo__img" :src="imagem" :alt="nome">
      <span>=</span>
      <img class="componente__img" :src="imagemComp1" alt="imagem componente">
      <span>+</span>
      <img class="componente__img" :src="imagemComp2" alt="imagem componente">
    </div>
  </div>
</template>

<style scoped>
  .completo__item {
    /* background-image: linear-gradient(to left, #1f52b1 0%, #180133 80%); */
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 50px;
    border: 1px solid #ffffff2e;
    box-shadow: 0 0 10px 3px #00000042;
    transition: .3s ease-in-out;
  }

  .completo__item:hover {
    cursor: pointer;
    filter: brightness(120%);
    box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.674)
  }
  .item__imgs {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 5px 0;
  }
  .componente__img {
    width: 64px;
    height: 64px;
  }
  .completo__img {
    width: 80px;
    height: 80px;
  }

  h3 {
    font-size: var(vt-f-m);
  }
</style>

<script>
export default {
name: 'CompletosBody'
}
</script>