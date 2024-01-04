import mutations from "./mutations";
import actions from "./actions";

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
};
