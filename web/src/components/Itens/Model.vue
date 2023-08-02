<script setup>
defineProps({
  nome: String,
  imagem: String,
  imagemComp1: String,
  imagemComp2: String,
  descricao: String,
  atributos: Array
})
</script>

<template>
  <div class="model">
    
    <div class="model__imgs">
      <img src="../../../public/itens-tft/determinacao-titanica.jpeg" class="model__img__main" alt="">
      <div class="model__components">
        <img src="../../../public/itens-tft/componentes/arco-recurvo.jpeg" class="model__img__comp" alt="">
        <span class="model__mais">+</span>
        <img src="../../../public/itens-tft/componentes/cota-de-malha.jpeg" class="model__img__comp" alt="">
      </div>
    </div>

    <div class="model__content">
      <h2 class="model__titulo">Nome do Item</h2>
      <p class="model__texto">Descrição do Item...</p>

      <ul class="model__atributos">
        <li class="atributos__item"></li>
      </ul>
    </div>

    <button type="button" @click="$emit('fechar')" class="modal__fechar">FECHAR</button>
  </div>
</template>

<style scoped>

  .modal__fechar {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgb(221, 76, 76);
    padding: 2px;
    border: 1px solid #000;
    transition: .3s ease-in-out;
    cursor: pointer;
  }

  .modal__fechar:active {
    transform: scale(0.9);
  }

  .model {
    position: relative;
    background-color: #fff;
    color: #000;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px;
  }

  .model__imgs {
    display: flex;
    flex-direction: column;
  }

  .model__img__main {
    width: 150px;
    height: 150px;
  }

  .model__components {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px 0;
  }

  .model__img__comp {
    width: 64px;
    height: 64px;
  }

  .model__mais {
    font-weight: 700;
  }

  .model__content {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
  }
</style>

<script>
export default {
name: 'ModelBox'
}
</script>