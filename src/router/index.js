import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tests',
    component: () => import('../views/Tests.vue')
  },
  {
    path:'/create-test',
    component: () => import('../views/CreateTest.vue')
  },
  {
    path:'/test/:id',
    component: () => import('../views/Test.vue'),
    props: true,
  },
  {
    path:'/result/:id',
    component: () => import('../views/Result.vue'),
    props: true,
  },
  {
    path:'/results/:id',
    component: () => import('../views/Results.vue'),
    props: true,
  },
  {
    path:'/question',
    component: () => import('../views/AddQuestion.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
