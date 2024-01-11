import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      loginInfos: {
        idToken: "",
        email: "",
        refreshToken: "",
        expiresIn: "",
        localId: "",
        registered: "",
      },
    };
  },
  mutations,
  actions,
  getters,
};
