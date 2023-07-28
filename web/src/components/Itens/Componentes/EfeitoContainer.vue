<script setup>
defineProps({
 vida: String,
 mana: String,
 ataque: String,
 habilidade: String,
 armadura: String,
 resMagica: String,
 velocidadeAtk: String,
 critico: String,
})
</script>

<template>
  <div class="item__efeito">
    <div class="efeito__container">
      <p>+{{ vida  }}</p>
      <img src="https://lolg-cdn.porofessor.gg/img/s/tft/items/icon-health.svg" alt="icone vida">
    </div>
    <div class="efeito__container">
      <p>+{{ mana }}</p>
      <img src="https://lolg-cdn.porofessor.gg/img/s/tft/items/icon-mana.svg" alt="icone mana">
    </div>
    <div class="efeito__container">
      <p>+{{ ataque }}</p>
      <img src="https://lolg-cdn.porofessor.gg/img/s/tft/items/icon-attack.svg" alt="icone ataque">
    </div>
    <div class="efeito__container">
      <p>+{{ habilidade }}</p>
      <img src="https://lolg-cdn.porofessor.gg/img/s/tft/items/icon-power.svg" alt="icone habilidade">
    </div>
    <div class="efeito__container">
      <p>+{{ armadura }}</p>
      <img src="https://lolg-cdn.porofessor.gg/img/s/tft/items/icon-armor.svg" alt="icone armadura">
    </div>
    <div class="efeito__container">
      <p>+{{ resMagica }}</p>
      <img src="https://lolg-cdn.porofessor.gg/img/s/tft/items/icon-mr.svg" alt="icone restencia mágica">
    </div>
    <div class="efeito__container">
      <p>{{ velocidadeAtk }}%</p>
      <img src="https://lolg-cdn.porofessor.gg/img/s/tft/items/icon-attackSpeed.svg" alt="icone velocidade de ataque">
    </div>
    <div class="efeito__container">
      <p>{{ critico }}%</p>
      <img src="https://lolg-cdn.porofessor.gg/img/s/tft/items/icon-crit.svg" alt="icone crítico">
    </div>
  </div>
</template>

<style scoped>
  .item__efeito {
    width: 30%;
    height: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .efeito__container {
    display: flex;
    align-items: center;
    gap: 5px;
    user-select: none;
  }

  .efeito__container:hover {
    filter: brightness(130%);
    box-shadow: 0px 0px 10px 3px #ffffff37;
  }

  .efeito__container img {
    filter: brightness(90%);
    width: 15px;
  }
</style>

<script>
export default {
name: 'EfeitoContainer'
}
</script>