import { useToast } from "vue-toastification";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

const toast = useToast();

export default {
  sendMessage(_, data) {
    addDoc(collection(db, "messages"), {
      from: data.from,
      to: data.to,
      content: data.message,
    })
      .then(() => {
        toast.success("Message Sent !", { timeout: 2000 });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Message send failed for reason : ", error.code);
      });
  },
};
