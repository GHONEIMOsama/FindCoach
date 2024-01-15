<template>
  <the-header></the-header>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import { auth } from "@/firebase";
import { mapActions, mapMutations } from "vuex";
import { useToast } from "vue-toastification";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.setIsLoggedIn(user !== null);
      if (user) {
        this.getUserById({ id: user.uid })
          .then((docSnap) => {
            if (docSnap.exists()) {
              this.setLoginInfos(docSnap.data());
            } else {
              this.toast.warning("User data not found");
            }
          })
          .catch((error) => {
            console.error(error);
            this.toast.error("Couldn't fetch user data for reason", error.code);
          });
      } else {
        this.setLoginInfos({
          email: "",
          isCoach: undefined,
          keyWords: [],
          lastName: "",
          name: "",
        });
      }
    });
  },
  methods: {
    ...mapMutations("auth", ["setIsLoggedIn", "setLoginInfos"]),
    ...mapActions("auth", ["getUserById"]),
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
