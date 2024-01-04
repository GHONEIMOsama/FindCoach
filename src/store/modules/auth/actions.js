import axios from "axios";

export default {
  async loginUser(context, data) {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAT4a9hGBaASIC6wlCj3W1RKToSkeVD-PI",
        {
          email: data.email,
          password: data.password,
          retourSecureToken: true,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          context.commit("setLoginInfos", {
            idToken: res.data.idToken,
            email: res.data.email,
            refreshToken: res.data.refreshToken,
            expiresIn: res.data.expiresIn,
            localId: res.data.localId,
            registered: res.data.registered,
          });
          context.commit("setIsLoggedIn", true);
        }
      });
  },
};
