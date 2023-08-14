import { createRouter, createWebHistory } from 'vue-router'
import News from '../views/News.vue'

const routes = [
  {
    path: '/',
    name: 'News',
    component: News,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
