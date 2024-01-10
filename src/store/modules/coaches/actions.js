import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebase";

export default {
  getAllCoaches() {
    const q = query(collection(db, "users"), where("isCoach", "==", true));
    return getDocs(q);
  },
  getCoachWithId(_, data) {
    const docRef = doc(db, "users", data.id);
    return getDoc(docRef);
  },
};
