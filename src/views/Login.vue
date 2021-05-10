<template>
  <div
    class="login is-flex is-flex-direction-column is-align-content-center is-align-items-center"
  >
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <section class="hero is-small is-success">
      <div class="hero-body">
        <p class="title">Welcome</p>
        <p v-if="login" class="subtitle">Login Below</p>
        <p v-else class="subtitle">Register Below</p>
      </div>
    </section>
    <div>
      <LoginComponent v-if="login" class="" msg="Welcome to Your Vue.js App" />
      <RegisterComponent v-else class="" msg="Welcome to Your Vue.js App" />
    </div>
    <button
      v-if="login"
      v-on:click="login = !login"
      class="button mt-4 is-success is-inverted"
    >
      Register an account
    </button>
    <button
      v-if="!login"
      v-on:click="login = !login"
      class="button mt-4 is-success is-inverted"
    >
      Have an account?
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from "@/components/LoginComponent.vue";
import RegisterComponent from "@/components/RegisterComponent.vue";

export default {
  name: "Login",
  components: {
    LoginComponent,
    RegisterComponent,
  },
  data() {
    return {
      login: true,
    };
  },
};
</script>

<style scoped>
.hero {
  width: 100vw;
}
.login {
  height: 100vh;
}
</style>
