<script setup>
defineProps({

})
</script>

<template>
  <div class="completo__item">
    <h3>Arauto de Zeke</h3>
    <div class="item__imgs">
      <img class="completo__img" src="/public/itens-tft/arauto-de-zeke.jpeg" alt="">
      <span>=</span>
      <img class="componente__img" src="/public/itens-tft/arauto-de-zeke.jpeg" alt="">
      <span>+</span>
      <img class="componente__img" src="/public/itens-tft/arauto-de-zeke.jpeg" alt="">
    </div>
  </div>
</template>

<style scoped>
  .completo__item {
    background-color: #000;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 50px;
    border: 1px solid #ffffff2e;
    box-shadow: 0 0 10px 3px #00000042;
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