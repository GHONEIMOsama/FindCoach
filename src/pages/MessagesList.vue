<template>
  <div class="d-flex flex-row justify-content-center">
    <h1 class="m-2">Messages</h1>
  </div>
  <div class="d-flex flex-row">
    <div v-for="msg in messages" :key="msg.id" class="m-2">
      <base-card>
        <h5 class="card-title">
          <span v-if="$store.getters['auth/getLoginInfos'].isCoach">{{
            msg.data.from
          }}</span>
          <span v-else>{{ msg.data.to }}</span>
        </h5>
        <p class="card-text">
          {{ msg.data.content }}
        </p>
      </base-card>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { mapActions } from "vuex";
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  components: { BaseCard },
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