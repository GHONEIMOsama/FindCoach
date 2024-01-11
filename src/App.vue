<template>
  <the-header></the-header>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import { auth } from "@/firebase";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.setIsLoggedIn(user !== null);
    });
  },
  methods: {
    ...mapMutations("auth", ["setIsLoggedIn"]),
  },
};
</script>

<style>
.app {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
</style>
