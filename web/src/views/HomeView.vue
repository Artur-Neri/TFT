<script setup>
  import { ref } from 'vue'
  import { onMounted } from 'vue';
  import CampeaoRepresentante from '../components/CampeaoRepresentante.vue';
  import CampeaoRepresentanteLenda from '../components/CampeaoRepresentanteLenda.vue';
  import campeaoApi from '../api/campeao-representante.json';

  onMounted(() => {
    const descricaoModoJogo = document.querySelector('.modos-de-jogo__descricao')
    const modoNormal = document.getElementById('modoNormal');
    const modoRanqueada = document.getElementById('modoRanqueada');
    const modoFrenetica = document.getElementById('modoFrenetica');
    const modoDupla = document.getElementById('modoDupla');

    modoNormal.addEventListener('click', () => descricaoModoJogo.textContent = "Normal");
    modoRanqueada.addEventListener('click', () => descricaoModoJogo.textContent = "Rankeada");
    modoFrenetica.addEventListener('click', () => descricaoModoJogo.textContent = "Frenetico");
    modoDupla.addEventListener('click', () => descricaoModoJogo.textContent = "Dupla");
  });

  
</script>

<script>
  const campeaoInfoImage = ref('../../public/lendas-tft/aurelion-sol.JPG')
  const campeaoInfoNome = ref('Aurelion Sol')

  function exibirInfoCampeao (imagem, nome) {
    campeaoInfoImage.value = imagem.replace("-square", "")
    campeaoInfoNome.value = nome
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

    <div class="modos-de-jogo">

      <h2>MODOS DE JOGO</h2>
      <div class="modos-de-jogo__content">
        <div class="modos-de-jogo__cabecalho">
          <h4>TFT</h4>
          <h3>TEAMFIGHT</h3>
          <h3>TACTICS</h3>
        </div>

          <div class="modos-de-jogo__descricao">
            <!-- <p>Monte uma equipe de Campeões para batalhar em seu nome. Derrote os sete oponentes e sobreviva por mais tempo.</p> -->
            <p>Normal</p>
          </div>

          <div class="modos-de-jogo__botoes">
            <div class="modo__item">
              <input type="radio" name="modos" id="modoNormal" checked onclick="trocarModoDeJogo(1)">
              <label for="modoNormal">NORMAL</label>
            </div>
            <div class="modo__item">
              <input type="radio" name="modos" id="modoRanqueada" onclick="trocarModoDeJogo(2)">
              <label for="modoRanqueada">RANQUEADA</label>
            </div>
            <div class="modo__item">
              <input type="radio" name="modos" id="modoFrenetica" onclick="trocarModoDeJogo(3)">
              <label for="modoFrenetica">BATALHA FRENÉTICA</label>
            </div>
            <div class="modo__item">
              <input type="radio" name="modos" id="modoDupla" onclick="trocarModoDeJogo(4)">
              <label for="modoDupla">DUPLAS DINÂMICAS (OFICINA)</label>
            </div>
          </div>

        </div>
      </div>
      <div class="campeao-representante">
        <div class="campeao-representante__cabecalho">
          <h2 class="campeao-representante__cabecalho__titulo">Lendas</h2>
        </div>

        <div class="campeao-representante__container">
          <div class="campeao-representante__representantes">
            <CampeaoRepresentante 
              v-for="campeao in campeaoApi"
              :key="campeao.id"
              :id="campeao.id"
              :nome="campeao.nome"
              :imagem="campeao.imagem"
              @click="exibirInfoCampeao(campeao.imagem, campeao.nome)"
            />
          </div>

          <!-- <div class="campeao-representante__cartas">
            <div class="cartas__estagio">
              <div class="estagio__title"></div>
              <div class="estagio__cartas">
                <div class="cartas__item">
                  <img src="../../public/efeitos-cartas-tft/tier1/afk.jpg" alt="" class="carta__item__img">
                  <h3 class="carta__item__title">Titulo teste</h3>
                  <p class="carta__item_description">descricao teste</p>
                </div>
                <div class="cartas__item">
                  <img src="../../public/efeitos-cartas-tft/tier1/afk.jpg" alt="" class="carta__item__img">
                  <h3 class="carta__item__title">Titulo teste</h3>
                  <p class="carta__item_description">descricao teste</p>
                </div>
                <div class="cartas__item">
                  <img src="../../public/efeitos-cartas-tft/tier1/afk.jpg" alt="" class="carta__item__img">
                  <h3 class="carta__item__title">Titulo teste</h3>
                  <p class="carta__item_description">descricao teste</p>
                </div>
              </div>

            </div>
          </div> -->
          <div class="campeao__representate__lenda__container">
            <CampeaoRepresentanteLenda  
            :imagem="campeaoInfoImage"
            :nome="campeaoInfoNome"
            />
          </div>      
        </div>
      </div>
    <!-- <ul>
      <li>Modos de jogo</li>
      <li>falar sobre o campeão representante</li>
      <li>efeito da partida</li>
      <li>chance de raridade por nível</li>
      <li>juros</li>
      <li>mobs</li>
    </ul> -->
  </main>
</template>



<style scoped>
  .campeao-representante__cartas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .campeao__representate__lenda__container {
    /* background-color: red; */
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
    /* background-color: white; */
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

  .modos-de-jogo {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #fff;
    border-radius: 10px;
    margin: 0 10px;
  }

  /* MODO DE JOGO */

  .modos-de-jogo__content {
    width: 500px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }

  .modos-de-jogo__botoes {
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: center;
    gap: 10px;
    margin-left: 200px;
  }

  .modo__item {
    display: flex;
    gap: 15px;
  }

  .modo__item input, .modo__item label {
    cursor: pointer;
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 600px;
    width: 100%;
    background-image: linear-gradient(to top, rgba(53, 26, 0, 0.705), rgba(0, 0, 27, 0.699));

  }
  
  .campeao-representante__representantes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    height: 100%;
    padding: 40px 0;
    overflow: auto;
    
    
    border-right: 2px solid #573b12;
  }

</style>
