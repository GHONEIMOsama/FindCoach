import { auth, db } from "@/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default {
  async loginUser(context, data) {
    signInWithEmailAndPassword(auth, data.email, data.password).then(() => {
      context.commit("setIsLoggedIn", true);
    });
  },
  async createAccount(context, data) {
    createUserWithEmailAndPassword(auth, data.email, data.password).then(
      (userCredentials) => {
        setDoc(doc(db, "users", userCredentials.user.uid), {
          name: data.name,
          lastNAme: data.lastName,
          isCoach: data.isCoach,
          keyWords: data.keyWords,
        }).then(() => {
          context.commit("setIsLoggedIn", true);
        });
      }
    );
  },
  logOutUser(context) {
    signOut(auth).then(() => {
      context.commit("setIsLoggedIn", false);
    });
  },
};
