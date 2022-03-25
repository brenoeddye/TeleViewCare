import { createRouter, createWebHashHistory } from 'vue-router';
import Auth from '../views/Authentication.vue';
import Call from '../views/Call.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/consulta',
    name: 'call',
    component: Call
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
