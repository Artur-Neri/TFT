<script setup>
defineProps({
  texto: String,
})
</script>

<template>
  <div>
    <p class="info__custo__custo">{{ texto }}</p>
    <img src="/public/coin.png" alt="moedas"/>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
name: 'RaridadeCusto'
}
</script>