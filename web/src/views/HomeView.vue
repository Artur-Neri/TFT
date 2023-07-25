<script setup>
  import { ref } from 'vue';
  // API
  import campeaoApi from '../api/campeao-representante-info.json';
  import efeitoApi from '../api/efeitos-partida.json';
  import raridadeApi from '../api/raridade-nivel.json';
  // COMPONENTES
  import ModoDeJogo from '../components/ModoDeJogo/ModoDeJogo.vue';
  import CampeaoRepresentante from '../components/Lendas/CampeaoRepresentante.vue';
  import CampeaoRepresentanteLenda from '../components/Lendas/CampeaoRepresentanteLenda.vue';
  import CampeaoRepresentanteCartas from '../components/Lendas/CampeaoRepresentanteCartas.vue';
  import EfeitoPartida from '../components/EfeitoPartida/EfeitoPartida.vue';
  import NivelRadio from '../components/RaridadeJuros/NivelRadio.vue';
  import RaridadeNivel from '../components/RaridadeJuros/Raridade.vue';
  import RaridadeCusto from '../components/RaridadeJuros/Custo.vue';


</script>

<script>
  const levelsCima = [1, 2, 3, 4, 5]
  const levelsBaixo = [6, 7, 8, 9, 10]
  const campeaoInfoImage = ref('../../public/lendas-tft/aurelion-sol.JPG')
  const campeaoInfoNome = ref('Aurelion Sol')
  const campeaoId = ref(0)
  const detail = ref('Detalhes')
  const showCards = ref(false)
  const raridade = ref(0)

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

 function raridadeNivelSelected(level) {
  console.log(level - 1)
  raridade.value = level -1 
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
            <div class="representantes__content">
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
            v-for="efeito in efeitoApi"
            v-bind:key="efeito.id"
            :nome="efeito.nome"
            :origem="efeito.origem"
            :imagem="efeito.imagem"
            :texto="efeito.descricao"
          />
        </div>
      </div>

      <div class="raridade-nivel">
        <div class="raridade-nivel__cabecalho">
          <h2 class="raridade-nivel__cabecalho__title">
            <span>chance por nível</span>
            <span>juros</span>
          </h2>
        </div>

        <div class="raridade__juros__container">

        <div class="raridade-nivel__container">
          <div class="raridade-nivel__seletor">
            <h3 class="raridade-nivel__seletor__title">Nível</h3>
            <div class="raridade-nivel__seletor__niveis">
              <div class="niveis-cima niveis">

                <NivelRadio 
                  v-for="level in levelsCima" 
                  :key="level" 
                  :level="level" 
                  :selected-level="selectedLevel"
                  @click="raridadeNivelSelected(level)"
                />
              </div>
              <div class="niveis-baixo niveis">
                <NivelRadio 
                  v-for="level in levelsBaixo" 
                  :key="level" 
                  :level="level" 
                  :selected-level="selectedLevel"
                  @click="raridadeNivelSelected(level)"
                />
              </div>
              
            </div>
          </div>
            
          <div class="raridade-nivel__info">
            <div class="raridade-nivel__info__chance">
              <h3 class="info__chance__title">Chance</h3>

              <div class="info__chance__content">
                <RaridadeNivel 
                :tier1= "raridadeApi[raridade].tier1"
                :tier2= "raridadeApi[raridade].tier2"
                :tier3= "raridadeApi[raridade].tier3"
                :tier4= "raridadeApi[raridade].tier4"
                :tier5= "raridadeApi[raridade].tier5"
                />

              </div>
            </div>

            <div class="raridade-nivel__info__custo">
              <h3 class="info__custo__title">Custo</h3>
              <div class="info__custo__content">

                <RaridadeCusto 
                v-for="level in levelsCima" 
                  :key="level" 
                  :texto="level"
                />
              </div>
            </div>
          </div>
        </div>


        <div class="juros">
          
          <h3>
            Existe 3 formas de juros, além da fixa que é ganhar 1 de ouro
          ao ganhar do oponente. As 3 formas são por acumulo de ouro, 
          sequencia de vitórias/derrota e acumulo passivo.
          </h3>

          <div class="juros__details">
            <div class="juros__info">

              <h4 class="juros__info__btn">acumulo de ouro</h4>
              <p class="juros__info__text">
                acumulo de ouro, a cada 10 de ouro você garante 1 de ouro na proxima rodada
                com o maximo de 5, ou seja juntando 50 de ouro voce garante o maximo de juros
                no acumulo de ouro.
              </p>
            </div>
            <div class="juros__info">
              <h4 class="juros__info__btn">vitórias ou derrotas</h4>
              <p class="juros__info__text">
                com uma sequencia de 3 vitorias ou derrotas voce garante 1 de ouro, 
                com 4 você recebe 2 e com 5, 3 de ouro.
              </p>
            </div>
            <div class="juros__info">
              <h4 class="juros__info__btn">acumulo passivo</h4>
              <p class="juros__info__text">
                Voce ganha 5 de ouro passivamente
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>


      <div class="mobs">
        <div class="mobs__cabecalho">
          <h2 class="mobs__cabecalho__title">mobs</h2>
        </div>
        <div class="mobs__container">
          <table>
            <thead>
              <tr>
                <th>Estágio</th>
                <th>Mob</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dado 1-1</td>
                <td>Dado 1-2</td>
              </tr>
              <tr>
                <td>Dado 2-1</td>
                <td>Dado 2-2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="dano">
        <div class="dano__cabecalho">
          <h2 class="dano__cabecalho__title">dano</h2>
        </div>
        <div class="dano__container">
          <table>
            <thead>
              <tr>
                <th>Estágio</th>
                <th>Dano</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dado 1-1</td>
                <td>Dado 1-2</td>
              </tr>
              <tr>
                <td>Dado 2-1</td>
                <td>Dado 2-2</td>
              </tr>
            </tbody>
          </table>

          <h2>+</h2>

          <table>
            <thead>
              <tr>
                <th>Peças</th>
                <th>Dano</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dado 1-1</td>
                <td>Dado 1-2</td>
              </tr>
              <tr>
                <td>Dado 2-1</td>
                <td>Dado 2-2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      

  </main>
</template>



<style scoped>



  /* ==== chance e juros ====*/

.raridade__juros__container {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

/* ------------ juros ---------------*/

.juros {
  width: 50%;
  height: 500px;
  padding: 50px 0;
}

.juros__details {
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  align-items: self-start;
  justify-content: center;
  margin-top: 20px;
  gap: 5px;
  overflow: auto;
}

.juros__info {
  width: 32%;
}

.juros__info__btn {
  height: 50px;
  background-color: #ffffffd5;
  color: #000;
  padding: 3px 0px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.juros__info__text {
  height: 150px;
  background-color: #080e53;
  padding: 5px;
  overflow: auto;
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

  .campeao-representante, .raridade-nivel, .mobs {
    border: 2px solid #573b12;
    margin: 50px 30px;
    
  }

  .campeao-representante__cabecalho, .raridade-nivel__cabecalho, .mobs__cabecalho {
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

  .representantes__content {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .campeao__representate__lenda__container {
    width: 100%;
    max-width: 330px;
    height: 100%;
  }

  /* ========= EFEITOS DA PARIDA ================== */

  .efeito__partida {
    margin: 0 30px;
    height: 450px;
    margin-bottom: 50px;
    border: 2px solid #573b12;
    overflow: auto;
  }

  .efeito__partida__cabecalho {
    text-transform: uppercase;
    padding: 10px 0;
    text-indent: 10px;
    font-family: var(--font-family-title);
    background-image: linear-gradient(to top, rgba(83, 83, 230, 0.315), rgb(0, 0, 78));
    border-bottom: 2px solid #573b12;
  }

  .efeito__content{
    background-image: linear-gradient(to top,rgba(0, 0, 27, 0.699) , rgba(53, 26, 0, 0.705));
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 40px;
  }

/* =============== Raridade Nível ================ */
/* ==== TITULO em conjuto ==== */
.raridade-nivel__cabecalho__title {
    display: flex;
    justify-content: space-around;
  }

  .info__chance__content, .info__custo__content {
    margin-top: 20px;
  }

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
    border: 1px solid transparent;
    transition: .3s ease-in-out;
}

  .niveis label:hover {
    cursor: pointer;
    background-color: #bbbbbb28;
  }

  .niveis input:checked+label {
    background-color: #bbbbbb28;
    border: 1px solid #ffffff86;
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

</style>
