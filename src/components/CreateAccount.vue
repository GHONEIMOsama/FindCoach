<template>
  <p>Register</p>
  <form @submit.prevent="createNewAccount">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="email" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="password" />
    <button type="submit">Create</button>
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
    ...mapActions("auth", ["createAccount"]),
    createNewAccount() {
      this.createAccount({ email: this.email, password: this.password });
    },
  },
};
</script>