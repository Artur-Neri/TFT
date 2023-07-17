<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import IndexItem from './components/IndexItem.vue';
</script>

<template>
  <header>
    <div class="image">
      <header class="nav-top">
        <img src="/public/my_tft_logo.png" alt="logo" class="header__logo">
      </header>
      <main class="main">
        <nav class="nav">
          <RouterLink to="/" class="nav__item"><span>Home</span></RouterLink>
          <RouterLink to="/campeoes" class="nav__item"><span>Campeões</span></RouterLink>
          <RouterLink to="/composicoes" class="nav__item"><span>Composições</span></RouterLink>
          <RouterLink to="/itens" class="nav__item"><span>Itens</span></RouterLink>
          
        </nav>
        <RouterView />
      </main>
    </div>
  </header>
  <IndexItem/>
 
</template>

<style scoped>

  .image{ 
    width: 100%;
    height: 100%;
    background-color: rgb(3, 3, 59);
    /* background-image: url('/public/bg-tft.png'); */
  }

  .nav-top { 
    background-color: #03033b;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  .header__logo {
    width: 100px;
    height: 50px;
    margin-left: 15px;
  }

  .main {
    display: flex;
  }

  .nav {
    position: sticky;
    top: 10vh;
    background-color: #03033b;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 90vh;
    font-family: var(--font-family-title);
    text-transform: uppercase;
    padding: 20px 15px;
    padding-right: 0;
    letter-spacing: 1px;
    z-index: 2;
    /* outline: 1px solid white; */
  }
  .nav a{
    color: var(--color-text);
    font-size: var(--font-size-nav);
    text-decoration: none;
  }

  .nav__item {
    /* transition: background-color .5s ease-in-out; */
    text-shadow: 6px 4px 2px black;
    padding: 0 10px;
    position: relative;
    overflow: hidden;
  }

  .nav__item::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 100%;
    transition: left 0.4s ease-in-out;
    background-image: linear-gradient(to left, rgb(29,29,79), rgba(182,182,174,.5), rgba(255,255,255,0));
  }
  
  .nav__item:hover::before {
    left: 0;
  }

  .nav__item span{
    position: relative;
    z-index: 2;
  }

  /* .nav__item:hover {
    background-color: #00ffff;
  } */
  
</style>
