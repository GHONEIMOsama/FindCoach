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
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAT4a9hGBaASIC6wlCj3W1RKToSkeVD-PI",
        {
          method: "POST",
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            retourSecureToken: true,
          }),
        }
      ).then((response) => {
        const responseData = response.json();
        console.log(responseData);
      });
    },
  },
};
</script>