<template>
  <div class="segmented-control">
    <input
      type="radio"
      id="login"
      name="segment"
      value="login"
      v-model="chosenOption"
      checked
    />
    <label for="login">Login</label>

    <input
      type="radio"
      id="create-account"
      name="segment"
      value="create-account"
      v-model="chosenOption"
    />
    <label for="create-account">Create Account</label>
  </div>
  <div class="d-flex justify-content-center">
    <base-card class="w-50">
      <div v-if="chosenOption === 'login'">
        <user-login></user-login>
      </div>
      <div v-else>
        <create-account></create-account>
      </div>
    </base-card>
  </div>
</template>

<script>
import CreateAccount from "@/components/CreateAccount.vue";
import UserLogin from "@/components/UserLogin.vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  components: {
    CreateAccount,
    UserLogin,
    BaseCard,
  },
  data() {
    return {
      chosenOption: "login",
    };
  },
};
</script>

<style scoped>
.segmented-control {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 20px auto;
}

input[type="radio"] {
  display: none;
}

label {
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
}

input[type="radio"]:checked + label {
  background-color: #e0e0e0;
}
</style>