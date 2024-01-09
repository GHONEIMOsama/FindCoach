import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "./pages/AuthPage.vue";
import CoachesList from "./pages/CoachesList.vue";
import ContactCoach from "./pages/ContactCoach";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/auth", component: AuthPage },
    { path: "/coaches", component: CoachesList },
    { path: "/contact", component: ContactCoach },
  ],
});

export default router;
