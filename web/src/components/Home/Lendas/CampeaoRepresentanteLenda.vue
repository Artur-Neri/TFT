<script setup>
  defineProps({
  nome: String,
  imagem: String,
  btnText: String,
})

  
</script>

<template>
  <div class="campeao-representante__lenda">
    <img :src="imagem" :alt="nome">
    <button type="button" class="lenda__btn" id="lenda__btn">{{ btnText }}</button>
  </div>
</template>


<style scoped>

  .campeao-representante__lenda {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .lenda__btn {
    background-color: rgb(78, 0, 0);
    width: 100%;
    padding: 5px 0;
    /* margin: 0 30px; */
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
    box-shadow: 0 0 5px 5px #ffffff3c;
    cursor: pointer;
    color: rgb(242, 225, 147);
    border: 2px solid rgb(242, 225, 147);
  }
  </style>

<script>
  export default {
    name: 'CampeaoRepresentanteLenda',
  }
</script>