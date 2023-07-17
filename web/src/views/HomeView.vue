<script setup>
  import { ref } from 'vue'
  import CampeaoRepresentante from '../components/Lendas/CampeaoRepresentante.vue';
  import CampeaoRepresentanteLenda from '../components/Lendas/CampeaoRepresentanteLenda.vue';
  import campeaoApi from '../api/campeao-representante.json';
import ModoDeJogo from '../components/ModoDeJogo/ModoDeJogo.vue';
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

    <ModoDeJogo />
    
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

            <div class="campeao-representante__cartas">
            <div class="cartas__estagio">
              <div class="estagio__title">
                <h3>AQUI VAI O TITULO</h3>
              </div>
              <div class="estagio__cartas">
                <div class="cartas__item">
                  <img src="../../public/efeitos-cartas-tft/tier1/afk.jpg" alt="" class="carta__item__img">
                  <div class="carta__item_description">
                    <h3 class="carta__item__title">Titulo teste</h3>
                    <p class="carta__item_text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maxime quasi veritatis illo itaque corrupti dolores modi quia sapiente dignissimos. Corporis inventore autem est aliquid et cum enim molestiae sequi.
                    </p>
                  </div>
                </div>
                <div class="cartas__item">
                  <img src="../../public/efeitos-cartas-tft/tier1/afk.jpg" alt="" class="carta__item__img">
                  <div class="carta__item_description">
                    <h3 class="carta__item__title">Titulo teste</h3>
                    <p class="carta__item_text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maxime quasi veritatis illo itaque corrupti dolores modi quia sapiente dignissimos. Corporis inventore autem est aliquid et cum enim molestiae sequi.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maxime quasi veritatis illo itaque corrupti dolores modi quia sapiente dignissimos. Corporis inventore autem est aliquid et cum enim molestiae sequi.
                    </p>
                  </div>
                </div>
                <div class="cartas__item">
                  <img src="../../public/efeitos-cartas-tft/tier1/afk.jpg" alt="" class="carta__item__img">
                  <div class="carta__item_description">
                    <h3 class="carta__item__title">Titulo teste</h3>
                    <p class="carta__item_text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maxime quasi veritatis illo itaque corrupti dolores modi quia sapiente dignissimos. Corporis inventore autem est aliquid et cum enim molestiae sequi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>

          <div class="campeao__representate__lenda__container">
            <CampeaoRepresentanteLenda  
            :imagem="campeaoInfoImage"
            :nome="campeaoInfoNome"
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

/* ============== cartas ============== */
  .campeao-representante__cartas {
    display: none;
    position: absolute;
    /*QUANDO CLICAR NO DETALHES MUDAR PARA 0 */
    left: 100%; 
    top: 0;
    background-image: linear-gradient(to top, rgba(53, 26, 0), rgba(0, 0, 27));
    height: 100%;
    width: 100%;
  }

  .cartas__estagio {
    padding: 20px 0;
    text-align: center;
  }

  .estagio__cartas {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
  }

  .cartas__item {
    background-color: rgb(58, 1, 1);
    border: 2px solid #573b12;
    border-radius: 12px;
    padding: 0 2px;
    width: 300px;
  }

  .cartas__item img {
    width: 250px;
  }

  .carta__item__title {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 12px;
  }

  .carta__item_text {
    overflow: auto;
    height: 150px;
    padding: 12px;
    text-align: justify;
  }

  

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
    overflow-y: auto;
    overflow-x: hidden;
  }

</style>
