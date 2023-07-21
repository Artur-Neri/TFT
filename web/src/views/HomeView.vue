<script setup>
  import { ref } from 'vue';
  import CampeaoRepresentante from '../components/Lendas/CampeaoRepresentante.vue';
  import CampeaoRepresentanteLenda from '../components/Lendas/CampeaoRepresentanteLenda.vue';
  import CampeaoRepresentanteCartas from '../components/Lendas/CampeaoRepresentanteCartas.vue';
  import campeaoApi from '../api/campeao-representante-info.json';
  import ModoDeJogo from '../components/ModoDeJogo/ModoDeJogo.vue';
import EfeitoPartida from '../components/EfeitoPartida/EfeitoPartida.vue';
</script>

<script>
  const campeaoInfoImage = ref('../../public/lendas-tft/aurelion-sol.JPG')
  const campeaoInfoNome = ref('Aurelion Sol')
  const campeaoId = ref(0)
  const detail = ref('Detalhes')
  const showCards = ref(false)

  function mudarId(id){
    campeaoId.value = id
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
          <h2 class="campeao-representante__cabecalho__title">Lendas</h2>
        </div>

        <div class="campeao-representante__container">
          <div class="campeao-representante__representantes">
            <div class="soTestando">
              <CampeaoRepresentante 
                v-for="campeao in campeaoApi"
                :key="campeao.id"
                :id="campeao.id"
                :nome="campeao.nome"
                :imagem="campeao.imagemCircle"
                @click="exibirInfoCampeao(campeao.imagemCircle, campeao.nome, campeao.id)"
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

      <div class="efeito__partida">
        <div class="efeito__partida__cabecalho">
          <h2>Efeito da partida</h2>
        </div>

        <div class="efeito__content">
          <EfeitoPartida   
            imagem="../../../public/origens-tft/noxus-origem.png"
            nome="noxus"
          />

          <EfeitoPartida   
            imagem="../../../public/origens-tft/ionia-origem.png"
            nome="ionia"
          />
        </div>
      </div>

      <div class="raridade-nivel">
        <div class="raridade-nivel__cabecalho">
          <h2 class="raridade-nivel__cabecalho__title">chance por nível</h2>
        </div>

        <div class="raridade-nivel__container">
          <div class="raridade-nivel__seletor">
            <h3 class="raridade-nivel__seletor__title">Nível</h3>
            <div class="raridade-nivel__seletor__niveis">
              <div class="niveis-cima niveis">
                <input type="radio" name="nivel" id="nivel1" checked>
                <label for="nivel1">1</label>
                <input type="radio" name="nivel" id="nivel2">
                <label for="nivel2">2</label>
                <input type="radio" name="nivel" id="nivel3">
                <label for="nivel3">3</label>
                <input type="radio" name="nivel" id="nivel4">
                <label for="nivel4">4</label>
                <input type="radio" name="nivel" id="nivel5">
                <label for="nivel5">5</label>
              </div>
              <div class="niveis-baixo niveis">
                <input type="radio" name="nivel" id="nivel6">
                <label for="nivel6">6</label>
                <input type="radio" name="nivel" id="nivel7">
                <label for="nivel7">7</label>
                <input type="radio" name="nivel" id="nivel8">
                <label for="nivel8">8</label>
                <input type="radio" name="nivel" id="nivel9">
                <label for="nivel9">9</label>
                <input type="radio" name="nivel" id="nivel10">
                <label for="nivel10">10</label>
              </div>
              
            </div>
          </div>
            
          <div class="raridade-nivel__info">
            <div class="raridade-nivel__info__chance">
              <h3 class="info__chance__title">chance</h3>
              <div class="info__chance__content">
                <div class="info__chance__t1 flex">
                  <div class="box tier1"></div>
                  <p class="info__chance__chance">100%</p>
                </div>

                <div class="info__chance__t2 flex">
                  <div class="box tier2"></div>
                  <p class="info__chance__chance">100%</p>
                </div>

                <div class="info__chance__t3 flex">
                  <div class="box tier3"></div>
                  <p class="info__chance__chance">100%</p>
                </div>

                <div class="info__chance__t4 flex">
                  <div class="box tier4"></div>
                  <p class="info__chance__chance">100%</p>
                </div>

                <div class="info__chance__t5 flex">
                  <div class="box tier5"></div>
                  <p class="info__chance__chance">100%</p>
                </div>

              </div>
            </div>

            <div class="raridade-nivel__info__custo">
              <h3 class="info__custo__title">custo</h3>
              <div class="info__custo__content">
                <div class="info__custo__t1">
                  <p class="info__custo__custo">1</p>
                  <img src="../../public/coin.png" alt="moedas"/>
                </div>
                <div class="info__custo__t2">
                  <p class="info__custo__custo">2</p>
                  <img src="../../public/coin.png" alt="moedas"/>
                </div>
                <div class="info__custo__t3">
                  <p class="info__custo__custo">3</p>
                  <img src="../../public/coin.png" alt="moedas"/>
                </div>
                <div class="info__custo__t4">
                  <p class="info__custo__custo">4</p>
                  <img src="../../public/coin.png" alt="moedas"/>
                </div>
                <div class="info__custo__t5">
                  <p class="info__custo__custo">5</p>
                  <img src="../../public/coin.png" alt="moedas"/>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div class="juros">
          <div class="juros__cabecalho">
            <h2 class="juros__cabecalho__title">juros</h2>
          </div>
        </div>

        <div class="juros__container">

        </div>
      </div>

      


      <div class="mobs">
        <div class="mobs__cabecalho">
          <h2 class="mobs__cabecalho__title">mobs</h2>
        </div>
      </div>

      <div class="mobs__container">

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

/* =============== Raridade Nível ================ */

  .raridade-nivel__container {
    margin: 50px 30px;
    font-size: var(--vt-f-m);
  }
  .raridade-nivel__seletor {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .raridade-nivel__seletor__niveis {
    display: flex;
    flex-direction: column;
  }

  .raridade-nivel__seletor__niveis input {
    display: none;
  }

  .niveis label {
    text-align: center;
  width: 39px;
  border-radius: 50%;
  padding: 5px;
}

  .niveis label:hover {
    cursor: pointer;
  }

  .niveis input:checked+label {
  background-color: #bbbbbb28;
}

  .niveis {
    display: flex;
    gap: 5px;
    justify-content: space-around;
    margin: 5px;
  }

  .info__chance__content{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .raridade-nivel__info {
    display: flex;
    gap: 50px;
  }

  .info__custo__content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .info__custo__content > * {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
  }

  .box {
    width: 32px;
    height: 32px;
  }

  .tier1 {
    background-color: var(--tier1);
  }
  .tier2 {
    background-color: var(--tier2);
  }
  .tier3 {
    background-color: var(--tier3);
  }
  .tier4 {
    background-color: var(--tier4);
  }
  .tier5 {
    background-color: var(--tier5);
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 5px;
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

  .campeao-representante, .raridade-nivel, .juros, .mobs {
    border: 2px solid #573b12;
    margin: 50px 30px;
    
  }

  .campeao-representante__cabecalho, .raridade-nivel__cabecalho, .juros__cabecalho, .mobs__cabecalho {
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

  /* ========= EFEITOS DA PARIDA ================== */

  .efeito__partida {
    margin: 0 30px;
    height: 400px;
    /* border: 2px solid #573b12; */
    /* background-color: #03033b; */
  }

  .efeito__partida__cabecalho {
    text-transform: uppercase;
    padding: 10px 0;
    text-indent: 10px;
    font-family: var(--font-family-title);
    /* background-image: linear-gradient(to top, rgba(83, 83, 230, 0.315), rgb(0, 0, 78)); */
    /* background-color: rgb(0, 0, 78); */
    /* background-color: #03033b; */
    /* border-bottom: 2px solid #573b12; */
  }

  .efeito__content{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 40px;
    align-items: center;
    width: 100%;
    /* background-image: linear-gradient(to top,rgba(0, 0, 27, 0.699) , rgba(53, 26, 0, 0.705)); */
  }

</style>
