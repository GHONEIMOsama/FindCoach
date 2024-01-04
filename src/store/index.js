import { createStore } from "vuex"
import AuthModule from './modules/auth/index';
import CoachesModule from './modules/coaches/index';

const store = createStore({
    modules: {
        auth: AuthModule,
        coaches: CoachesModule
    }
});

export default store;