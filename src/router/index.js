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
       path: '/about',
       name: 'about',
       component: () => import('../views/About.vue')
     },
     {
       path: '/project',
       name: 'project',
       component: () => import('../views/Project.vue')
     },
     {
       path: '/contact',
       name: 'contact',
       component: () => import('../views/Contact.vue')
     },
     {
      path: '/article',
      name: 'article',
      component: () => import('../views/article.vue')
    },
    {
      path: '/article/qc',
      name: 'article-qc',
      component: () => import('../views/QcArticle.vue')
    },
    {
      path: '/article/instrument',
      name: 'article-ins',
      component: () => import('../views/InsArticle.vue')
    },
    {
      path: '/article/kalibrasi',
      name: 'article-cal',
      component: () => import('../views/CalibrationArticle.vue')
    },
    {
      path: '/article/electric',
      name: 'article-elec',
      component: () => import('../views/ElectricArticle.vue')
    }

  ]
})

export default router
