<script setup>
  import campeaoApi from '../api/Campeoes/campeoes.js';
  import itensApi from '../api/Itens/itens.json'

  const linhas = 4
  const colunas = 7
  const tiers = 5

</script>

<template>
  <section class="master">

    <header>
      <h1>Composições</h1>
      <h3>Faca sua composição vitoriosa</h3>
    </header>

    <div class="caracteristicas__slots">
      <div class="caracteristicas">
        <div class="caracteristica_ativa">
          <img src="https://github.com/Artur-Neri.png" alt="caracteristica">
          <span>1/8</span>
        </div>
        <div class="caracteristica_ativa">
          <img src="https://github.com/Vitor-HenriqueAS.png" alt="caracteristica">
          <span>1/5</span>
        </div>
      </div>

      <div class="slots">
        <div class="linha"
        v-for="linha in linhas" :key="linha"
        >
          <slot class="slot" name="slot"
          v-for="coluna in colunas" :key="coluna"
          >
          <p>opinha</p>
          </slot>
        </div>
      </div>

      <div class="botoes">
        <button type="button">teste</button>
        <button type="button">teste diferente</button>
      </div>
    </div>

    <div class="campeoes__itens">
      <div class="campeao__main">
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
              <div v-for="(campeao, index) in campeaoApi[tier-1]" 
              :key="index"  
              @click="ativa(tier, index)"
              class="campeoes__conteudo__img">          
                <img 
                :src="campeao.img" 
                :alt="campeao.nome" 
                :title="campeao.nome"
                :class="'tier'+tier"
                />
            </div>
          </div>
        </div>
      </div>

      <div class="itens">
        <div 
          v-for="(item, index) in itensApi[2].completos" :key="index"
        >
        <img :src="item.imagem" :alt="item.nome" class="itens__img">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

  .master {
    color: white;
    background-color: rgba(255,255,255,0.1);
    width: 100%;
    padding: 0 20px;
  }

  header {
    text-align: center;
    font-family: var(--font-family-title);
    margin-bottom: 30px;
  }

  .caracteristicas__slots {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .caracteristica_ativa img {
    width: 22px;
    height: 22px;
  }

  .linha {
    display: flex;
    gap: 20px;
  }

  .itens__img {
    width: 64px;
    height: 64px;
    padding: 5px;
  }

  .campeoes__itens {
    display: flex;
    align-items: self-start;
    gap: 30px;
  }

  .campeao__main {
    width: fit-content;
    background-color: red;
  }

  .campeoes__cabecalho {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .campeoes__custo {
    display: flex;
    align-items: center;
  }

  .campeoes__conteudo {
    display: flex ;
    flex-wrap: wrap;
    gap: 10px;
  }

  .campeoes__conteudo__img img{
    width: 64px;
    height: 64px;
  }

  .itens {
    display: flex;
    width: 50%;
    flex-wrap: wrap;
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
