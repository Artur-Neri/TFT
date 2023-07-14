<template>
  <div class="campeao-representante__item">
    <img src="../../public/lendas-tft/aurelion-sol-square.JPG" class="campeao-representante__item__img">
    <div class="poligono-border">
      <h3 class="campeao-representante__item__nome poligono">Aurelion Sol</h3>
    </div>
  </div>
</template>

<style scoped>
  .campeao-representante__item {
    position: relative;
    
  }

  .campeao-representante__item__img {
    border-radius: 50%;
    border: 5px solid rgb(163, 133, 0);
  }

  .poligono {
    background-color: rgb(58, 1, 1);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    width: 98%;
    clip-path: polygon(10% 0%,90% 0%,100% 50%,90% 100%, 10% 100%, 0% 50%);
  }

  .poligono-border {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 40px;
    background-color: rgb(163, 133, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(10% 0%,90% 0%,100% 50%,90% 100%, 10% 100%, 0% 50%);
  }
</style>

<script>
  export default {
    name: 'CampeaoRepresentante'
  }
</script>