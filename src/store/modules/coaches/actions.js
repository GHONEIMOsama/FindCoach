import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  getAllCoaches() {
    const q = query(collection(db, "users"), where("isCoach", "==", true));
    return getDocs(q);
  },
  getCoachWithId(id) {
    const docRef = doc(db, "users", id);
    return getDocs(docRef);
  },
};
