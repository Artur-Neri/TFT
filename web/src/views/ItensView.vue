<script setup>
  import itensApi from '../api/Itens/itens.json'
  import ComponentesBody from '../components/Itens/Componentes/ComponentesBody.vue';
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
          v-for="(itens, index) in itensApi[0].componentes" :key="index"
          :id="index"
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
        <div class="completo__item">
          
        </div>
      </div>
    </div>

    <!-- <h1>Itens</h1>
    <ul>
      <li>Itens completos</li>
      <li>Nome dos itens</li>
      <li>Efeito do item</li>
      <li>Componentes individuais</li>
      <li>Filtro</li>
    </ul> -->
  </main>
</template>

<style scoped>
  main {
    width: 100%;
    background-color: rgba(255,255,255,0.1);
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 50px;
    user-select: none;
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

</style>
