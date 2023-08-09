import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItensView from '../views/ItensView.vue'
import CampeoesView from '../views/CampeoesView.vue'
import ComposicoesView from '../views/ComposicoesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/itens',
      name: 'itens',
      component: ItensView
    },
    {
      path: '/campeoes',
      name: 'campeoes',
      component: CampeoesView
    },
    {
      path: '/composicoes',
      name: 'composicoes',
      component: ComposicoesView
    }
  ]
})

export default router
