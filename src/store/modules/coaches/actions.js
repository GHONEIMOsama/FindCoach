import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  getAllCoaches() {
    const q = query(collection(db, "users"), where("isCoach", "==", true));
    return getDocs(q);
  },
};
