<template>
  <form @submit.prevent="createNewAccount">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="name">Name</label
          ><input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            class="form-control"
            v-model.trim="form.name.value"
            @blur="form.name.isBlured = true"
          />
          <small
            v-show="this.form.name.isBlured && !isNameInputValid"
            class="text-danger"
            >*Name format is not respected</small
          >
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name"
            class="form-control"
            v-model.trim="form.lastName.value"
            @blur="form.lastName.isBlured = true"
          />
          <small
            v-show="this.form.lastName.isBlured && !isLastNameInputValid"
            class="text-danger"
            >*Last Name format is not respected</small
          >
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model.trim="form.email.value"
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
    <div class="form-check">
      <input
        type="checkbox"
        name="isCoach"
        id="isCoach"
        class="form-check-input"
        v-model="form.isCoach.value"
      />
      <label for="isCoach" class="form-check-label">Register as a Coach</label>
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
        name: {
          value: "",
          isBlured: false,
        },
        lastName: {
          value: "",
          isBlured: false,
        },
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
        isCoach: {
          value: false,
        },
      },
    };
  },
  computed: {
    isEmailInputValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return (
        this.form.email.value.length > 0 &&
        emailRegex.test(this.form.email.value)
      );
    },
    isPasswordInputValid() {
      return this.form.password.value.length >= 6;
    },
    isConfirmPasswordValid() {
      return this.form.confirmPassword.value === this.form.password.value;
    },
    isNameInputValid() {
      return this.form.name.value.length > 0;
    },
    isLastNameInputValid() {
      return this.form.lastName.value.length > 0;
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