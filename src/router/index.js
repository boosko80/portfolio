import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/components/05-pages/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
