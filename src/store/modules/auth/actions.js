import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase";

export default {
  async loginUser(context, data) {
    signInWithEmailAndPassword(auth, data.email, data.password).then(() => {
      context.commit("setIsLoggedIn", true);
    });
    /* axios
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
      }); */
  },
  async createAccount(context, data) {
    createUserWithEmailAndPassword(auth, data.email, data.password).then(() => {
      context.commit("setIsLoggedIn", true);
    });
    /* axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAT4a9hGBaASIC6wlCj3W1RKToSkeVD-PI",
        {
          email: data.email,
          password: data.password,
          returnSecureToken: true,
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
      }); */
  },
  logOutUser(context) {
    /* context.commit("setLoginInfos", {
      idToken: null,
      email: null,
      refreshToken: null,
      expiresIn: null,
      localId: null,
      registered: null,
    }); */
    signOut(auth).then(() => {
      context.commit("setIsLoggedIn", false);
    });
  },
};
