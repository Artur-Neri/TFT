<script setup>
defineProps({
  efeitos: Array,
})
</script>

<template>
  <div class="item__efeito">
    <div class="efeito__container"
      v-for="(atributo, index) in efeitos" :key="index">
      <p>{{atributo.efeito}}</p>
      <img :src="atributo.imagem" alt="icone vida">
    </div>
  </div>
</template>

<style scoped>
  .item__efeito {
    width: 30%;
    height: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .efeito__container {
    display: flex;
    align-items: center;
    gap: 5px;
    user-select: none;
  }

  .efeito__container:hover {
    filter: brightness(130%);
    box-shadow: 0px 0px 10px 3px #ffffff37;
  }

  .efeito__container img {
    filter: brightness(90%);
    width: 15px;
  }
</style>

<script>
export default {
name: 'EfeitoContainer'
}
</script>