<script setup>
  import { onMounted } from 'vue';

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

<template>
  <div class="modos-de-jogo">

  <h2>MODOS DE JOGO</h2>
  <div class="modos-de-jogo__content">
    <div class="modos-de-jogo__cabecalho">
      <h4>TFT</h4>
      <h3>TEAMFIGHT</h3>
      <h3>TACTICS</h3>
    </div>

      <div class="modos-de-jogo__container">
        <!-- <p>Monte uma equipe de Campeões para batalhar em seu nome. Derrote os sete oponentes e sobreviva por mais tempo.</p> -->
        <p class="modos-de-jogo__descricao">Normal</p>
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
  </div>
</template>

<style scoped>
  .modos-de-jogo {
    background-image: linear-gradient(to top, transparent, rgb(0, 0, 37));
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #573b12;
    margin: 0 30px;
    /* border-radius: 10px; */
  }

  .modos-de-jogo__content {
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .modos-de-jogo__container {
    padding: 5px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .modos-de-jogo__descricao {
    text-align: initial;
    width: 300px;
    height: 100%;
    padding: 5px;
    overflow: auto;
  }

  .modos-de-jogo__botoes {
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: center;
    gap: 10px;
  }

  .modo__item {
    display: flex;
    gap: 15px;
  }

  .modo__item input, .modo__item label {
    cursor: pointer;
  }
</style>

<script>
  export default {
    name: 'ModoDeJogo'
  }
  
</script>