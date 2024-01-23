import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  /**
   * Get all coaches in the database.
   * @returns Promise with all coaches data in the database.
   */
  getAllCoaches() {
    const q = query(collection(db, "users"), where("isCoach", "==", true));
    return getDocs(q);
  },
};
