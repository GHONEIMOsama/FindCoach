<template>
  <div class="d-flex bg-violet h-5rem align-items-center">
    <div class="mr-auto p-2">
      <router-link to="/coaches">
        <h1 class="text-white" title="Home Page">Find Coach</h1>
      </router-link>
    </div>
    <div class="p-2" v-if="isLoggedIn">
      <div class="d-flex flex-row">
        <div class="p-2">
          <router-link to="/messages">
            <fa-icon
              icon="fa-solid fa-message"
              class="fa-2x"
              title="messages"
            />
          </router-link>
        </div>
        <div class="p-2">
          <div class="text-white">{{ currentUserName }}</div>
        </div>
        <div class="p-2">
          <fa-icon
            icon="fa-solid fa-power-off"
            class="text-white pointer fa-2x"
            @click="logOutUser"
            title="logOut"
          />
        </div>
      </div>
    </div>
    <div class="p-4" v-else>
      <router-link to="/auth">
        <fa-icon icon="fa-solid fa-user" class="fa-2x" title="Authentication" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/getIsLoggedIn"];
    },
    currentUserName() {
      return (
        this.$store.getters["auth/getLoginInfos"].name +
        " " +
        this.$store.getters["auth/getLoginInfos"].lastName
      );
    },
  },
  methods: {
    ...mapActions("auth", ["logOutUser"]),
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

.h-5rem {
  height: 5rem;
}

.mr-auto {
  margin-right: auto;
}
</style>