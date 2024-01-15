import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      loginInfos: {
        email: "",
        isCoach: undefined,
        keyWords: [],
        lastName: "",
        name: "",
      },
    };
  },
  mutations,
  actions,
  getters,
};
