import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/ItensView.vue')
    },
    {
      path: '/campeoes',
      name: 'campeoes',
      component: () => import('../views/CampeoesView.vue')
    },
    {
      path: '/composicoes',
      name: 'composicoes',
      component: () => import('../views/ComposicoesView.vue')
    }
  ]
})

export default router
