<template>
  <div class="login is-flex is-align-content-center is-align-items-center">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <LoginComponent class="" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "Login",
  components: {
    LoginComponent,
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
}
</style>
