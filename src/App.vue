<template>
  <the-header></the-header>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
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
