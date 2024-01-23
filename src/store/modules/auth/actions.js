import { auth, db } from "@/firebase";
import router from "@/router";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useToast } from "vue-toastification";

const toast = useToast();

export default {
  loginUser(_, data) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        toast.success("Login success !", { timeout: 2000 });
        router.push("/coaches");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Login Failed for reason : " + error.code);
      });
  },
  createAccount(context, data) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        const userInfo = {
          name: data.name,
          lastName: data.lastName,
          isCoach: data.isCoach,
          keyWords: data.keyWords,
          email: userCredentials.user.email,
        };
        setDoc(doc(db, "users", userCredentials.user.uid), userInfo)
          .then(() => {
            context.commit("setLoginInfos", userInfo);
            toast.success("Create Account success !", { timeout: 2000 });
            router.push("/coaches");
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
  logOutUser() {
    signOut(auth)
      .then(() => {
        toast.success("SignOut success !", { timeout: 2000 });
        router.push("/coaches");
      })
      .catch((error) => {
        console.error(error);
        toast.error("SignOut failed for reason : " + error.code);
      });
  },
  getUserById(_, data) {
    const docRef = doc(db, "users", data.id);
    return getDoc(docRef);
  },
};
