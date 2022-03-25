import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Auth from "@/views/Authentication.vue";
import Call from '@/views/Call.vue';

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/consulta",
    name: "Call",
    component: Call,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;