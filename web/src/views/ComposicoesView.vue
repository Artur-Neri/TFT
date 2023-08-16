<script setup>
  import campeaoApi from '../api/Campeoes/campeoes.js';
  import itensApi from '../api/Itens/itens.json';
  import { Icon } from '@iconify/vue';

  const linhas = 4
  const colunas = 7
  const tiers = 5
  
</script>

<script>
  const vazio = []
  const arrayVerifica = []

  for (let i = 0; i < 28; i++) {
    arrayVerifica[i] = 'vazio';
  }

  function removerCampeao(id) {
    const slots = document.querySelectorAll('.slot_img')
    slots[id].src = '/public/elmo-capacete.png'
    arrayVerifica[id] = 'vazio'
  }

  function verifica() {
    for(let i=0;i<28;i++){
      if (arrayVerifica[i] == 'vazio') {
        arrayVerifica[i] = 'preenchido'
        vazio.push(i)
        return i
      }
    }
  }

  function adicionaCampeao(img){
    const slots = document.querySelectorAll('.slot_img')
    slots[verifica()].src = img
  }

</script>


<template>
  <section class="master">

    <header>
      <h1>Composições</h1>
      <h3>Faca sua composição vitoriosa</h3>
    </header>

    <div class="caract__e__slots">
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
        v-for="(linha, indexLinha) in linhas" :key="indexLinha"
        >
          <slot class="coluna" name="slot"
          v-for="(coluna, indexColuna) in colunas" :key="indexColuna"
          >
            <div class="slot" @click="removerCampeao(indexColuna + 7 * indexLinha)">
              <img
                class="slot_img"
                :id="indexColuna + 7 * indexLinha"
                src="/public/elmo-capacete.png"
               >
            </div>
          </slot>
        </div>
      </div>

      <div class="botoes">
        <Icon icon="mdi:share" class="btn__export"/>
        <Icon icon="ic:baseline-download" class="btn__export"/>
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
              class="campeoes__conteudo__img"
              @click="adicionaCampeao(campeao.img, campeao.nome, tier)"
              >          
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

  .caract__e__slots {
    display: flex;
    align-items: self-start;
    justify-content: space-evenly;
  }

  .caracteristicas {
    min-height: 100%;
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(255, 255, 255, 0.299);
    border-radius: 5px;
  }

  .caracteristica_ativa {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 5px 0;
  }

  .caracteristica_ativa span{
    font-family: var(--vt-f-inter);
    font-size: var(--vt-f-p);
  }

  .caracteristica_ativa img {
    width: 30px;
    height: 30px;
    border: 1px solid white;
  }

  .linha {
    display: flex;
    gap: 20px;
  }

  .slot {
    border:2px solid black;
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }

  .slot img {
    width: 100%;
    height: 100%;
  }

  .botoes {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 10px;
    margin-bottom: 15px;
  }

  .btn__export {
    width: 50px;
    height: 50px;
    border: 2px solid rgba(255, 255, 255, 0.34);
    border-radius: 5px;
    filter: brightness(70%);
    cursor: pointer;
    transition: all .2s ease-in-out;
  }

  .btn__export:hover {
    filter: brightness(100%);
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
