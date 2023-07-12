<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    
    <div class="image">
      <header class="nav-top">
        <img src="/public/my_tft_logo.png" alt="logo" class="header__logo">
      </header>
      <main class="main">
        <nav class="nav">
          <RouterLink to="/" class="nav__item">Home</RouterLink>
          <RouterLink to="/campeoes" class="nav__item">Campeões</RouterLink>
          <RouterLink to="/composicoes" class="nav__item">Composições</RouterLink>
          <RouterLink to="/itens" class="nav__item">Itens</RouterLink>  
        </nav>
        <RouterView />
      </main>
    </div>
  </header>
  
 
</template>

<style scoped>

  header {
    display: flex;
    align-items: center;
  }
  .header__logo {
    width: 100px;
    height: 50px;
    margin-left: 15px;
  }

  .nav__item {
    transition: background-color .5s ease-in-out;
    text-shadow: 6px 4px 2px black;
    padding: 0 10px;
  }

  .nav__item:hover {
    background-color: #00ffff;
  }

  .main {
    display: flex;
  }
  .nav-top {
    /* background-color: red; */
    height: 10vh;
  }
  .nav {
    font-family: var(--vt-f-bree-serif);
    text-transform: uppercase;
    /* outline: 1px solid white; */
    height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 15px;
    letter-spacing: 1px;
    
  }
  .nav a{
    color: var(--color-text);
    font-size: var(--font-size-nav);
    text-decoration: none;
  }
  .image{ 
    width: 100%;
    height: 100vh;
    background-image: url('/public/bg-tft.png');
  }
</style>
