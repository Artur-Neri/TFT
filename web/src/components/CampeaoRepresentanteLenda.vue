<script setup>
  defineProps({
  nome: String,
  imagem: String

})

</script>

<template>
  <div class="campeao-representante__lenda">
    <img :src="imagem" :alt="nome">
    <button type="button" class="lenda__btn">Detalhes</button>
  </div>
</template>


<style scoped>
  .campeao-representante__lenda {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .campeao-representante__lenda img {
    height: 500px;
    width: 300px;
  }

  .lenda__btn {
    background-color: rgb(78, 0, 0);
    width: 100%;
    display: block;
    padding: 5px 0;
    margin: 0 30px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: rgb(224, 204, 114);
    font-family: var(--font-family-title);
    font-size: var(--vt-f-m);
    border: 2px solid rgb(163, 133, 0);
    transition: .3s ease-in-out;
  }

  .lenda__btn:hover {
    cursor: pointer;
  }
</style>

<script>
  export default {
    name: 'CampeaoRepresentanteLenda'
  }
</script>