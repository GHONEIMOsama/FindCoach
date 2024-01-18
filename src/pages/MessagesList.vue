<template>
  <h1>Messages</h1>
  <div v-for="msg in messages" :key="msg.id">
    {{ msg.data.content }}
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      messages: [],
    };
  },
  created() {
    this.getMessagesByEmail({
      destination: this.$store.getters["auth/getLoginInfos"].isCoach
        ? "to"
        : "from",
      email: auth.currentUser.email,
    }).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.messages.push({ id: doc.id, data: doc.data() });
      });
    });
  },
  methods: {
    ...mapActions("msg", ["getMessagesByEmail"]),
  },
};
</script>