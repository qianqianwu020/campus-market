import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Publish from '../views/Publish.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/publish', component: Publish },
    { path: '/detail/:id', component: Detail }
  ]
})

export default router