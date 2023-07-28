<script setup>
  import cartasApi from '../../../api/Home/campeao-representante-info.json'
  defineProps({
    id: Int32Array,
    isActive: Boolean
  })

  
</script>

<template>
  <div class="campeao-representante__cartas" :class="{ showCards: isActive }">
    <div class="cartas__estagio">
      <div class="estagio__title">
        <h3>Você recebe 1 delas na sua 1ª escolha de Aprimoramento no Estágio 2-1</h3>
      </div>
      <div class="estagio__cartas">
        <div class="cartas__item">
          <img :src="cartasApi[id].cartas.turno1.imagem[0].tier1" alt="" class="carta__item__img">
          <div class="carta__item_description">
            <h3 class="carta__item__title">{{ cartasApi[id].cartas.turno1.nome[0].tier1 }}</h3>
            <p class="carta__item_text">
              {{ cartasApi[id].cartas.turno1.descricao[0].tier1 }}
            </p>
          </div>
        </div>
        <div class="cartas__item">
          <img :src="cartasApi[id].cartas.turno1.imagem[0].tier2" alt="" class="carta__item__img">
          <div class="carta__item_description">
            <h3 class="carta__item__title">{{ cartasApi[id].cartas.turno1.nome[0].tier2 }}</h3>
            <p class="carta__item_text">
              {{ cartasApi[id].cartas.turno1.descricao[0].tier2 }}
            </p>
          </div>
        </div>
        <div class="cartas__item">
          <img :src="cartasApi[id].cartas.turno1.imagem[0].tier3" alt="" class="carta__item__img">
          <div class="carta__item_description">
            <h3 class="carta__item__title">{{ cartasApi[id].cartas.turno1.nome[0].tier3 }}</h3>
            <p class="carta__item_text">
              {{ cartasApi[id].cartas.turno1.descricao[0].tier3 }}
            </p>
          </div>
        </div>
      </div>
    </div>


    <div class="cartas__estagio">
      <div class="estagio__title">
        <h3>Você recebe 1 delas na sua 2ª escolha de Aprimoramento no Estágio 3-2</h3>
      </div>
      <div class="estagio__cartas">
        <div class="cartas__item">
          <img :src="cartasApi[id].cartas.turno2.imagem[0].tier1" alt="" class="carta__item__img">
          <div class="carta__item_description">
            <h3 class="carta__item__title">{{ cartasApi[id].cartas.turno2.nome[0].tier1 }}</h3>
            <p class="carta__item_text">
              {{ cartasApi[id].cartas.turno2.descricao[0].tier1 }}
            </p>
          </div>
        </div>
        <div class="cartas__item">
          <img :src="cartasApi[id].cartas.turno2.imagem[0].tier2" alt="" class="carta__item__img">
          <div class="carta__item_description">
            <h3 class="carta__item__title">{{ cartasApi[id].cartas.turno2.nome[0].tier2 }}</h3>
            <p class="carta__item_text">
              {{ cartasApi[id].cartas.turno2.descricao[0].tier2 }}
            </p>
          </div>
        </div>
        <div class="cartas__item">
          <img :src="cartasApi[id].cartas.turno2.imagem[0].tier3" alt="" class="carta__item__img">
          <div class="carta__item_description">
            <h3 class="carta__item__title">{{ cartasApi[id].cartas.turno2.nome[0].tier3 }}</h3>
            <p class="carta__item_text">
              {{ cartasApi[id].cartas.turno2.descricao[0].tier3 }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="cartas__estagio">
      <div class="estagio__title">
        <h3>Você recebe 1 delas na sua 3ª escolha de Aprimoramento no Estágio 4-2</h3>
      </div>
      <div class="estagio__cartas">
        <div class="cartas__item">
          <img :src="cartasApi[id].cartas.turno3.imagem[0].tier1" alt="" class="carta__item__img">
          <div class="carta__item_description">
            <h3 class="carta__item__title">{{ cartasApi[id].cartas.turno3.nome[0].tier1 }}</h3>
            <p class="carta__item_text">
              {{ cartasApi[id].cartas.turno3.descricao[0].tier1 }}
            </p>
          </div>
        </div>
        <div class="cartas__item">
          <img :src="cartasApi[id].cartas.turno3.imagem[0].tier2" alt="" class="carta__item__img">
          <div class="carta__item_description">
            <h3 class="carta__item__title">{{ cartasApi[id].cartas.turno3.nome[0].tier2 }}</h3>
            <p class="carta__item_text">
              {{ cartasApi[id].cartas.turno3.descricao[0].tier2 }}
            </p>
          </div>
        </div>
        <div class="cartas__item">
          <img :src="cartasApi[id].cartas.turno3.imagem[0].tier3" alt="" class="carta__item__img">
          <div class="carta__item_description">
            <h3 class="carta__item__title">{{ cartasApi[id].cartas.turno3.nome[0].tier3 }}</h3>
            <p class="carta__item_text">
              {{ cartasApi[id].cartas.turno3.descricao[0].tier3 }}
            </p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
/* ============== cartas ============== */
.campeao-representante__cartas {
    display: none;
    position: absolute;
    /*QUANDO CLICAR NO DETALHES MUDAR PARA 0 E BLOCK*/
    top: 0;
    left: 100%;
    background-image: linear-gradient(to top, rgba(53, 26, 0), rgba(0, 0, 27));
    width: 100%;
    transition: all .5s ease-in-out;
  }

.showCards {
  display: block;
  left: 0;
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

</style>
  
<script>
  export default {
    name: "CampeaoRepresentanteCartas"
  }
</script>