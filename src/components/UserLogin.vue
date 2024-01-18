<template>
  <form @submit.prevent="login">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        :class="{
          'form-control': true,
          'is-invalid': this.form.email.isBlured && !isEmailInputValid,
        }"
        placeholder="Enter Email"
        v-model="form.email.value"
        @blur="form.email.isBlured = true"
      />
      <small
        v-show="this.form.email.isBlured && !isEmailInputValid"
        class="invalid-feedback"
        >*Email format is not respected</small
      >
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        :class="{
          'form-control': true,
          'is-invalid': this.form.password.isBlured && !isPasswordInputValid,
        }"
        placeholder="Enter Password"
        v-model="form.password.value"
        @blur="form.password.isBlured = true"
      />
      <small
        v-show="this.form.password.isBlured && !isPasswordInputValid"
        class="invalid-feedback"
        >*Password field length must be equal or higher then 6 caracters</small
      >
    </div>

    <div class="d-flex flex-row-reverse">
      <button
        type="submit"
        class="btn btn-primary my-2"
        :disabled="!isFormValid"
      >
        Login
      </button>
    </div>
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