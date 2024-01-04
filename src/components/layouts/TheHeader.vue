<template>
  <div class="row bg-violet">
    <div class="col-9">
      <h1>Find Coach</h1>
    </div>
    <div class="col-3">
      <div v-if="isLoggedIn">
        <h6>LOGGED IN</h6>
      </div>
      <div v-else>
        <router-link to="/auth">
          <button type="button">Auth</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
};
</script>

<style scoped>
</style>