import { createStore } from "vuex";
import AuthModule from "./modules/auth/index";
import CoachesModule from "./modules/coaches/index";
import MessagesModule from "./modules/messages/index";

const store = createStore({
  modules: {
    auth: AuthModule,
    coaches: CoachesModule,
    msg: MessagesModule,
  },
});

export default store;
