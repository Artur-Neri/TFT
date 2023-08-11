<script setup>
  import campeaoApi from '../api/Campeoes/campeoes.json';
  import {ref} from 'vue'
</script>

<script>
  const tiers = 5
  const modal= ref(false)
  const tierSelecionado = ref(0)
  const idCampeaoSelecionado = ref(0)

  function ativa(tier, index) {
    console.log("opa")
    modal.value = true
    tierSelecionado.value = tier - 1
    idCampeaoSelecionado.value = index
  }

  function desativa () {
    modal.value = false
  }

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
          <div v-for="(campeao, index) in campeaoApi[tier-1]" 
          :key="index"  
          @click="ativa(tier, index)">          
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

    <div 
      v-if="modal===true"
      class="campeao__modal"
    > 
      <div class="campeao__info">
        <div class="info__cabecalho">
          <h3>Skill</h3>
          <div class="info__caracteristica">
            <img v-for="(camp, index) in campeaoApi[tierSelecionado][idCampeaoSelecionado].caracteristica" :key="index"
              :src="camp.img" 
              :alt="camp.nome"
              >
          </div>
        </div>

        <div class="info__descricao">
          <p>
            {{campeaoApi[tierSelecionado][idCampeaoSelecionado].descricao}}
          </p>
        </div>
      </div>

      <img 
        class="campeao__banner"
        :src="campeaoApi[tierSelecionado][idCampeaoSelecionado].img"
        :alt="campeaoApi[tierSelecionado][idCampeaoSelecionado].nome"
      />
      
      <button type="button" @click="desativa" class="modal__fechar">FECHAR</button>
    </div>

  </main>
</template>

<style scoped>

  .campeao__banner {
    height: 100%;
  }

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
  .campeao__modal {
    position: fixed;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 100vw 100vw #0000009d;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    color: #000;
    width: 600px;
    height: 200px;
    padding: 8px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .campeao__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 90%;
  }

  .info__cabecalho {
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 10px 0;
  }

  .info__cabecalho h3 {
    background-color: rgb(19, 19, 118);
    color: #fff;
    font-family: var(--font-family-title);
    letter-spacing: 1px;
    border-radius: 10px;
    padding: 5px;
  }

  .info__descricao {
    height: 80%;
  }

  .info__descricao p {
    height: 100%;
    font-family: var(--vt-f-inter);
    padding: 0px 10px;
    margin: 5px 0px;
    font-weight: 700;
    text-align: left;
    vertical-align: middle;
    overflow: auto;
  }

  .info__caracteristica img {
    width: 35px;
    padding: 5px;
    background-color: rgb(19, 19, 118);
    border-radius: 50%;
  } 


  .info__caracteristica {
    display: flex;
    align-self: center;
    gap: 15px;
  }

  /* ---------------------- */

  main {
    position: relative;
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
    flex-wrap: wrap;
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
