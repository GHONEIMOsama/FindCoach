<template>
  <create-account></create-account>
  <user-login></user-login>
</template>

<script>
import CreateAccount from "./components/CreateAccount.vue";
import UserLogin from "./components/UserLogin.vue";

export default {
  name: "App",
  components: {
    CreateAccount,
    UserLogin,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
