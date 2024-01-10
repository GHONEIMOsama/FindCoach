<template>
  <div class="row bg-violet">
    <div class="col-9">
      <router-link to="/coaches">
        <h1>Find Coach</h1>
      </router-link>
    </div>
    <div class="col-3">
      <div v-if="isLoggedIn">
        <div class="text-white">{{ currentUser.email }}</div>
        <button type="button" @click="logOutUser">LOG OUT</button>
      </div>
      <div v-else>
        <router-link to="/auth">
          <button type="button">Auth</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { auth } from "@/firebase";

export default {
  computed: {
    isLoggedIn() {
      return this.currentUser !== null || this.$store.state.auth.isLoggedIn;
    },
    currentUser() {
      return auth.currentUser;
    },
  },
  methods: {
    ...mapActions("auth", ["logOutUser"]),
  },
};
</script>

<style scoped>
</style>