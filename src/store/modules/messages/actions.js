import { useToast } from "vue-toastification";
import {
  collection,
  addDoc,
  query,
  getDocs,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebase";

const toast = useToast();

export default {
  /**
   * Send Message.
   * @param {*} _
   * @param {*} data
   */
  sendMessage(_, data) {
    addDoc(collection(db, "messages"), {
      from: data.from,
      to: data.to,
      content: data.message,
      date: data.date,
    })
      .then(() => {
        toast.success("Message Sent !", { timeout: 2000 });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Message send failed for reason : ", error.code);
      });
  },
  /**
   * Get Message by Email.
   * @param {*} _
   * @param {*} data
   * @returns
   */
  getMessagesByEmail(_, data) {
    const q = query(
      collection(db, "messages"),
      where(data.destination, "==", data.email),
      orderBy("date", "desc")
    );
    return getDocs(q);
  },
};
