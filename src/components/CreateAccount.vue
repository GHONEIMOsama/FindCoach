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
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    createNewAccount() {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAT4a9hGBaASIC6wlCj3W1RKToSkeVD-PI",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }),
        }
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>