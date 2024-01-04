<template>
  <p>Login</p>
  <form @submit.prevent="login">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    login() {
      this.loginUser({ email: this.email, password: this.password });
    },
  },
};
</script>