import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "./pages/AuthPage.vue";
import CoachesList from "./pages/CoachesList.vue";
import ContactCoach from "./pages/ContactCoach";
import MessagesList from "./pages/MessagesList";

import { auth } from "./firebase";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    {
      path: "/auth",
      component: AuthPage,
      beforeEnter: (to, from, next) => {
        if (auth.currentUser === null) {
          next();
        } else {
          next("/coaches");
        }
      },
    },
    { path: "/coaches", component: CoachesList },
    {
      path: "/contact/:coachId",
      component: ContactCoach,
      props: true,
      beforeEnter: (to, from, next) => {
        if (auth.currentUser !== null) {
          next();
        } else {
          next("/auth");
        }
      },
    },
    {
      path: "/messages",
      component: MessagesList,
      beforeEnter: (to, from, next) => {
        if (auth.currentUser !== null) {
          next();
        } else {
          next("/auth");
        }
      },
    },
  ],
});

export default router;
