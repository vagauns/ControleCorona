import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ExamesView from "../views/ExamesView.vue"
import RegisterView from "../views/RegisterView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/exames",
    name: "about",
    component: ExamesView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
