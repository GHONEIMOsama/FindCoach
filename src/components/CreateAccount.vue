<template>
  <form @submit.prevent="createNewAccount">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="form.email.value"
        @blur="form.email.isBlured = true"
        class="form-control"
        placeholder="Enter Email"
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
        v-model="form.password.value"
        @blur="form.password.isBlured = true"
        class="form-control"
        placeholder="Enter Password"
      />
      <small
        v-show="this.form.password.isBlured && !isPasswordInputValid"
        class="text-danger"
        >*Password field length must be equal or higher then 6 caracters</small
      >
    </div>
    <div class="form-group">
      <label for="confirmPassword">Confirm Password</label
      ><input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password"
        class="form-control"
        v-model="form.confirmPassword.value"
        @blur="form.confirmPassword.isBlured = true"
      />
      <small
        v-show="this.form.confirmPassword.isBlured && !isConfirmPasswordValid"
        class="text-danger"
        >*Entered value is different from entered password</small
      >
    </div>
    <button type="submit" class="btn btn-primary" :disabled="!isFormValid">
      Create
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
        confirmPassword: {
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
    isConfirmPasswordValid() {
      return this.form.confirmPassword.value === this.form.password.value;
    },
    isFormValid() {
      return (
        this.isEmailInputValid &&
        this.isPasswordInputValid &&
        this.isConfirmPasswordValid
      );
    },
  },
  methods: {
    ...mapActions("auth", ["createAccount"]),
    createNewAccount() {
      this.createAccount({
        email: this.form.email.value,
        password: this.form.password.value,
      });
    },
  },
};
</script>