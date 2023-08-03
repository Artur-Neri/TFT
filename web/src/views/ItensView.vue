<script setup>
  import itensApi from '../api/Itens/itens.json'
  import ComponentesBody from '../components/Itens/ComponentesBody.vue';
  import CompletosBody from '../components/Itens/CompletosBody.vue';
  import ModelBox from '../components/Itens/Model.vue';
</script>

<script>
  import {ref} from 'vue';

  const changeIndex = ref(0)
  const itemActive = ref(false)

  function mostrarModel(index) {
    changeIndex.value = index
    itemActive.value = true
  }

  function desativaModel() {
    itemActive.value = false
  }
</script>

<template>
  <main>
    <div class="main__cabecalho">
      <h1>Itens</h1>
      <h3>Descubra mais detalhes dos itens do TFT !</h3>
    </div>

    <div class="componentes">
      <div class="componentes__cabecalho">
        <h2>componentes</h2>
      </div>

      <div class="componentes__body">
        <ComponentesBody 
          v-for="(itens, index) in itensApi[1].componentes" :key="index"
          :id="index.toString()"
          :nome="itens.nome"
          :imagem="itens.imagem"
        />
      </div>
    </div>

    <div class="itens__completos">
      <div class="itens__completos__cabecalho">
        <h2>Itens Completos</h2>
      </div>

      <div class="itens__completos__body">
        <CompletosBody 
        v-for="(item, index) in itensApi[2].completos" :key="index"
        :nome = "item.nome"
        :imagem = "item.imagem"
        :imagemComp1 = "item.imagemComp1"
        :imagemComp2 = "item.imagemComp2"
        @click = "mostrarModel(index)"
        />
      </div>

      <div class="completo__model" 
        v-if="itemActive === true"
      >
        <ModelBox 
        :nome = "itensApi[2].completos[changeIndex].nome"
        :imagem = "itensApi[2].completos[changeIndex].imagem"
        :imagemComp1 = "itensApi[2].completos[changeIndex].imagemComp1"
        :imagemComp2 = "itensApi[2].completos[changeIndex].imagemComp2"
        :descricao = "itensApi[2].completos[changeIndex].descricao"
        :atributos = "itensApi[2].completos[changeIndex].efeitos"
        v-on:fechar="desativaModel()"
        />
      </div>

    </div>
  </main>
</template>

<style scoped>

  .completo__model {
    position: fixed;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 50%;
  }

  main {
    position: relative;
    width: 100%;
    background-color: rgba(255,255,255,0.1);
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .main__cabecalho {
    text-align: center;
    font-family: var(--font-family-title);
    padding: 10px 0;
  }
  .main__cabecalho h1{
    text-transform: uppercase;
  }

  .componentes, .itens__completos {
    padding: 0px 20px;
  }

  .componentes__cabecalho, .itens__completos__cabecalho {
    font-family: var(--font-family-title);
    text-transform: uppercase;
    border-bottom: 1px solid #ffffff55;
    margin-bottom: 20px;
  }

  .componentes__body, .itens__completos__body {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .itens__completos__body{
    gap: 50px;
  }

  .itens__completos__body > *{
    flex: 1 0 25%;  
  }

</style>
