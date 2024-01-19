<template>
  <form @submit.prevent="">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="name">Name</label
          ><input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            :class="{
              'form-control': true,
              'is-invalid': this.form.name.isBlured && !isNameInputValid,
            }"
            v-model.trim="form.name.value"
            @blur="form.name.isBlured = true"
          />
          <small
            v-show="this.form.name.isBlured && !isNameInputValid"
            class="invalid-feedback"
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
            :class="{
              'form-control': true,
              'is-invalid':
                this.form.lastName.isBlured && !isLastNameInputValid,
            }"
            v-model.trim="form.lastName.value"
            @blur="form.lastName.isBlured = true"
          />
          <small
            v-show="this.form.lastName.isBlured && !isLastNameInputValid"
            class="invalid-feedback"
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
        :class="{
          'form-control': true,
          'is-invalid': this.form.email.isBlured && !isEmailInputValid,
        }"
        placeholder="Enter Email"
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
        v-model="form.password.value"
        @blur="form.password.isBlured = true"
        :class="{
          'form-control': true,
          'is-invalid': this.form.password.isBlured && !isPasswordInputValid,
        }"
        placeholder="Enter Password"
      />
      <small
        v-show="this.form.password.isBlured && !isPasswordInputValid"
        class="invalid-feedback"
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
        :class="{
          'form-control': true,
          'is-invalid':
            this.form.confirmPassword.isBlured && !isConfirmPasswordValid,
        }"
        v-model="form.confirmPassword.value"
        @blur="form.confirmPassword.isBlured = true"
      />
      <small
        v-show="this.form.confirmPassword.isBlured && !isConfirmPasswordValid"
        class="invalid-feedback"
        >*Entered value is different from entered password</small
      >
    </div>
    <div class="form-check py-2">
      <input
        type="checkbox"
        name="isCoach"
        id="isCoach"
        class="form-check-input"
        v-model="form.isCoach.value"
      />
      <label for="isCoach" class="form-check-label">Register as a Coach</label>
    </div>
    <div class="form-group" v-show="form.isCoach.value">
      <label for="keyWords">What do you want to coach, Example : VueJS </label>
      <div class="input-group">
        <input
          type="text"
          name="keyWords"
          id="keyWords"
          class="form-control"
          placeholder="What do you want to coach"
          v-model.trim="form.keyWords.value"
          @keydown.enter="addNewKeyWord"
          aria-label="keyWords"
          aria-describedby="keyWordsAdd"
        />
        <div class="input-group-append">
          <button
            class="input-group-text add-button"
            id="keyWordsAdd"
            @click="addNewKeyWord"
          >
            Add
          </button>
        </div>
      </div>
      <!-- <label for="keyWords">What do you want to coach, Example : VueJS </label>
      <div class="d-flex">
        <div class="pe-2">
          <input
            type="text"
            name="keyWords"
            id="keyWords"
            class="form-control"
            placeholder="What do you want to coach"
            v-model.trim="form.keyWords.value"
            @keydown.enter="addNewKeyWord"
          />
        </div>
      </div> -->

      <div>
        <span v-for="(keyWord, index) in keyWords" :key="index" class="m-3">
          {{ keyWord }}
          <span @click="removeKeyWord(index)" class="pointer">x</span>
        </span>
      </div>
    </div>
    <div class="d-flex flex-row-reverse">
      <button
        type="submit"
        class="btn btn-primary my-3"
        :disabled="!isFormValid"
        @click="createNewAccount"
      >
        Create
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
        keyWords: {
          value: "",
        },
      },
      keyWords: [],
    };
  },
  watch: {
    "form.isCoach.value": function (newVal) {
      if (newVal === false) {
        this.keyWords = [];
        this.form.keyWords.value = "";
      }
    },
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
        this.isConfirmPasswordValid &&
        this.isNameInputValid &&
        this.isLastNameInputValid
      );
    },
  },
  methods: {
    ...mapActions("auth", ["createAccount"]),
    createNewAccount() {
      this.createAccount({
        email: this.form.email.value,
        password: this.form.password.value,
        name: this.form.name.value,
        lastName: this.form.lastName.value,
        isCoach: this.form.isCoach.value,
        keyWords: this.keyWords,
      });
    },
    addNewKeyWord() {
      if (this.form.keyWords.value.length > 0) {
        this.keyWords.push(this.form.keyWords.value);
        this.form.keyWords.value = "";
      }
    },
    removeKeyWord(index) {
      this.keyWords.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.add-button {
  border-radius: inherit;
}
</style>