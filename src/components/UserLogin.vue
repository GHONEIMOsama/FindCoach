<template>
  <form @submit.prevent="login">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        placeholder="Enter Email"
        v-model="form.email.value"
        @blur="form.email.isBlured = true"
      />
      <small
        v-show="this.form.email.isBlured && !isEmailInputValid"
        class="text-danger"
        >*Email format is not respected</small
      >
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="form-control"
        placeholder="Enter Password"
        v-model="form.password.value"
        @blur="form.password.isBlured = true"
      />
      <small
        v-show="this.form.password.isBlured && !isPasswordInputValid"
        class="text-danger"
        >*Password field length must be equal or higher then 6 caracters</small
      >
    </div>

    <button type="submit" class="btn btn-primary" :disabled="!isFormValid">
      Login
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: {
          value: "",
          isBlured: false,
        },
        password: {
          value: "",
          isBlured: false,
        },
      },
    };
  },
  computed: {
    isEmailInputValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return (
        this.form.email.value.trim().length > 0 &&
        emailRegex.test(this.form.email.value)
      );
    },
    isPasswordInputValid() {
      return this.form.password.value.length >= 6;
    },
    isFormValid() {
      return this.isEmailInputValid && this.isPasswordInputValid;
    },
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    login() {
      this.loginUser({
        email: this.form.email.value,
        password: this.form.password.value,
      });
    },
  },
};
</script>