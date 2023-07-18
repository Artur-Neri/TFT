<script setup>
  import { ref } from 'vue';
  import CampeaoRepresentante from '../components/Lendas/CampeaoRepresentante.vue';
  import CampeaoRepresentanteLenda from '../components/Lendas/CampeaoRepresentanteLenda.vue';
  import CampeaoRepresentanteCartas from '../components/Lendas/CampeaoRepresentanteCartas.vue';
  import campeaoApi from '../api/campeao-representante.json';
  import ModoDeJogo from '../components/ModoDeJogo/ModoDeJogo.vue';
</script>

<script>
  const campeaoInfoImage = ref('../../public/lendas-tft/aurelion-sol.JPG')
  const campeaoInfoNome = ref('Aurelion Sol')
  const campeaoId = ref(0)
  const detail = ref('Detalhes')
  const showCards = ref(false)

  function mudarId(id){
    const botaoDetalhes = document.querySelector("#lenda__btn")
    if (id != 15){
      campeaoId.value = id-1
      botaoDetalhes.disabled=false
    } 
    else {
      botaoDetalhes.disabled=true
    }
  }

  function exibirInfoCampeao (imagem, nome, id) {
    campeaoInfoImage.value = imagem.replace("-square", "")
    campeaoInfoNome.value = nome
    mudarId(id)
  }


  function changeReturn() {
    if (detail.value === 'Detalhes'){
      detail.value = 'Voltar'
      showCards.value = true
    } else if (detail.value === 'Voltar'){
      detail.value = 'Detalhes'
      showCards.value = false
    }
 }
  

</script>

<template>
  <main>
    <div class="cabecalho">
      <img src="https://th.bing.com/th/id/R.8a1092521e8f042a11ac940503071b4d?rik=bV8wMNU3CbtPHA&pid=ImgRaw&r=0" alt="pinguin" class="cabecalho__img">
      <div class="cabecalho__title">
        <h1>Bem vindo!</h1>
        <p>Aqui você vai encontrar informações sobre TFT</p>
      </div>
      <img src="https://th.bing.com/th/id/R.8a1092521e8f042a11ac940503071b4d?rik=bV8wMNU3CbtPHA&pid=ImgRaw&r=0" alt="pinguin" class="cabecalho__img">
    </div>

    <ModoDeJogo />
    
      <div class="campeao-representante">
        <div class="campeao-representante__cabecalho">
          <h2 class="campeao-representante__cabecalho__titulo">Lendas</h2>
        </div>

        <div class="campeao-representante__container">
          <div class="campeao-representante__representantes">
            <div class="soTestando">
              <CampeaoRepresentante 
                v-for="campeao in campeaoApi"
                :key="campeao.id"
                :id="campeao.id"
                :nome="campeao.nome"
                :imagem="campeao.imagem"
                @click="exibirInfoCampeao(campeao.imagem, campeao.nome, campeao.id)"
              />
            </div>
            <CampeaoRepresentanteCartas
            :id="campeaoId"
            :isActive="showCards"
            />

          </div>

          <div class="campeao__representate__lenda__container">
            <CampeaoRepresentanteLenda 
            :imagem="campeaoInfoImage"
            :nome="campeaoInfoNome"
            :btnText="detail"
            @click="changeReturn()"
            />
          </div>      
        </div>
        
      </div>

      <div class="efeito-partida">
        <h2>Efeito da partida</h2>
      </div>

      <div class="raridade-nivel">
        <h2>chance de raridade por nível</h2>
      </div>

      <div class="juros">
        <h2>juros</h2>
      </div>

      <div class="mobs">
        <h2>mobs</h2>
      </div>


    <!-- <ul>
      <li>Modos de jogo</li> FEITO
      <li>falar sobre o campeão representante</li> FEITO
      <li>efeito da partida</li>
      <li>chance de raridade por nível</li>
      <li>juros</li>
      <li>mobs</li>
    </ul> -->
  </main>
</template>



<style scoped>

  /* ================== lendas ==================*/
  .campeao__representate__lenda__container {
    width: 100%;
    max-width: 330px;
    height: 100%;
  }

  /* ======================== */

  main {
    color: white;
    background-color: rgba(255,255,255,0.1);
    width: 100%;
    font-family: var(--font-family-text);
  }

  h1 {
    font-family: var(--font-family-title);
    text-transform: uppercase;
  }

  .cabecalho {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    gap: 20px;
  }

  .cabecalho__img:nth-child(1) {
    transform: rotateY(180deg);
  }

  .cabecalho__title {
    text-align: center;
  }

  .cabecalho__img {
    width: 100px;
  }

  /* LENDAS */

  .campeao-representante {
    border: 2px solid #573b12;
    margin: 50px 30px;
  }

  .campeao-representante__cabecalho {
    background-image: linear-gradient(to top, rgba(83, 83, 230, 0.315), rgb(0, 0, 78));
    text-transform: uppercase;
    padding: 10px 0;
    text-indent: 10px;
    font-family: var(--font-family-title);
    border-bottom: 2px solid #573b12;
  }
  
  .campeao-representante__container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 600px;
    width: 100%;
    background-image: linear-gradient(to top, rgba(53, 26, 0, 0.705), rgba(0, 0, 27, 0.699));

  }
  
  .campeao-representante__representantes {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    height: 100%;
    padding: 40px 0;
    border-right: 2px solid #573b12;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .soTestando {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

</style>
