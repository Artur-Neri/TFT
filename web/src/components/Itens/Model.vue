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
      <img :src="imagem" class="model__img__main" :alt="nome" draggable="false">
      <div class="model__components">
        <img :src="imagemComp1" class="model__img__comp" alt="componente" draggable="false">
        <span class="model__mais">+</span>
        <img :src="imagemComp2" class="model__img__comp" alt="componente" draggable="false">
      </div>
    </div>

    <div class="model__content">
      <h2 class="model__titulo">{{ nome }}</h2>
      <p class="model__texto">{{ descricao }}</p>

      <ul class="model__atributos">
        <li class="atributos__item"
        v-for="(atributo,index) in atributos" :key="index" 
        >{{atributo.efeito}} <img :src="atributo.imagem" alt="atributo"></li>
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
    border: 1px solid #000;
    letter-spacing: 1px;
    font-weight: 700;
    color: #fff;
    text-shadow: 2px 2px 2px #000;
    padding: 2px;
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
    box-shadow: 0 0 100vw 100vw #0000009d;
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

  .model__atributos {
    display: flex;
    align-content: center;
    gap: 10px;
  }

  .model__atributos{
    padding: 0;
  }

  .atributos__item{
    display: flex;
    align-items: center;
    gap: 5px;
    list-style: none;
    border: 1px solid rgba(128, 128, 128, 0.267);
    border-radius: 10px;
    padding: 5px 10px;
  }

  .atributos__item img {
    width: 20px;
    height: 20px;
  }


</style>

<script>
export default {
name: 'ModelBox'
}
</script>