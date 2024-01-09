import { auth, db } from "@/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useToast } from "vue-toastification";

const toast = useToast();

export default {
  async loginUser(context, data) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        context.commit("setIsLoggedIn", true);
        toast.success("Login success !", { timeout: 2000 });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login Failed for reason : " + error.code);
      });
  },
  async createAccount(context, data) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        setDoc(doc(db, "users", userCredentials.user.uid), {
          name: data.name,
          lastNAme: data.lastName,
          isCoach: data.isCoach,
          keyWords: data.keyWords,
        })
          .then(() => {
            context.commit("setIsLoggedIn", true);
            toast.success("Create Account success !", { timeout: 2000 });
          })
          .catch((error) => {
            console.error(error);
            toast.error(
              "Create account information failed for reason : " + error.code
            );
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Create account failed for reason : " + error.code);
      });
  },
  logOutUser(context) {
    signOut(auth)
      .then(() => {
        context.commit("setIsLoggedIn", false);
        toast.success("SignOut success !", { timeout: 2000 });
      })
      .catch((error) => {
        console.error(error);
        toast.error("SignOut failed for reason : " + error.code);
      });
  },
};
