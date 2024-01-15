<template>
  <div class="row bg-violet">
    <div class="col-8">
      <router-link to="/coaches">
        <h1>Find Coach</h1>
      </router-link>
    </div>
    <div class="col-1" v-if="isLoggedIn">
      <router-link to="/messages">
        <button type="button">Messages</button>
      </router-link>
    </div>
    <div class="col-3">
      <div v-if="isLoggedIn">
        <div class="text-white">{{ currentUserName }}</div>
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

export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/getIsLoggedIn"];
    },
    currentUserName() {
      return (
        this.$store.getters["auth/getLoginInfos"].name +
        " " +
        this.$store.getters["auth/getLoginInfos"].lastName
      );
    },
  },
  methods: {
    ...mapActions("auth", ["logOutUser"]),
  },
};
</script>

<style scoped>
</style>