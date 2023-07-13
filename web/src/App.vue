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
    /* transition: background-color .5s ease-in-out; */
    text-shadow: 6px 4px 2px black;
    padding: 0 10px;
    position: relative;
    overflow: hidden;
  }

  /* .nav__item:hover {
    background-color: #00ffff;
  } */

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

  .main {
    display: flex;
  }
  .nav-top {
    /* background-color: red; */
    height: 10vh;
  }
  .nav {
    font-family: var(--font-family-title);
    text-transform: uppercase;
    /* outline: 1px solid white; */
    height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 15px;
    padding-right: 0;
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
    /* background-image: url('/public/bg-tft.png'); */
    background-color: rgb(3, 3, 59);
  }
</style>
