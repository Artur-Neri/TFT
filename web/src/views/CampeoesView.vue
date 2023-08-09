<script setup>
  import campeaoApi from '../api/Campeoes/campeoes.json';
</script>

<script>
  const tiers = 5
</script>

<template>
  <main>
    <div class="main__cabecalho">
      <h1>Campeões</h1>
      <h3>Descubra mais sobre os campeões do TFT!</h3>
    </div>

    
    <div class="campeoes__galeria">
      
      <div class="campeao"
        v-for="tier in tiers" 
        :key="tier"
      >
        <div class="campeoes__cabecalho">
          <h3>Tier {{ tier }}</h3>
          <div class="campeoes__custo">
            {{ tier }}
            <img src="/public/coin.png" alt="coin">
          </div>
        </div>
        <div class="campeoes__conteudo">
          <img v-for="(campeao, index) in campeaoApi[tier-1]" 
          :key="index" 
          :src="campeao.img" 
          :alt="campeao.nome" 
          :title="campeao.nome"
          :class="'tier'+tier"
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

  main {
    color: white;
    background-color: rgba(255,255,255,0.1);
    width: 100%;
  }

  .main__cabecalho {
    text-align: center;
    font-family: var(--font-family-title);
    padding: 10px 0;
  }

  .campeoes__galeria{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .campeao {
    padding: 0 20px;
  }

  .campeoes__cabecalho {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--vt-f-inter);
  }

  .campeoes__custo{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .campeoes__conteudo {
    display: flex;
    align-items: center;
    gap: 40px;
    flex: wrap;
  }

  .campeoes__conteudo img{
    width: 100px;
    height: 100px;
  }

  .tier1 {
    border:3px solid var(--tier1);
  }
  .tier2 {
    border:3px solid var(--tier2);
  }
  .tier3 {
    border:3px solid var(--tier3);
  }
  .tier4 {
    border:3px solid var(--tier4);
  }
  .tier5 {
    border:3px solid var(--tier5);
  }
  
</style>
