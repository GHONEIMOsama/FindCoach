import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "./pages/AuthPage.vue";
import CoachesList from "./pages/CoachesList.vue";
import ContactCoach from "./pages/ContactCoach";
import { auth } from "./firebase";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    {
      path: "/auth",
      component: AuthPage,
      beforeEnter: (to, from, next) => {
        console.log(auth.currentUser);
        if (auth.currentUser === null) {
          next();
        } else {
          next("/coaches");
        }
      },
    },
    { path: "/coaches", component: CoachesList },
    { path: "/contact/:coachId", component: ContactCoach, props: true },
  ],
});

export default router;
