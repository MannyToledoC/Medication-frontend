<template>
  <div id="page-container">
    <div id="content-wrap">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about" v-if="isLogged">About</router-link>
        <router-link to="/login" v-else>Login</router-link>
      </div>
      <router-view />
    </div>

    <footer id="footer" class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Test</strong> by
          <a href="https://manueltoledo.net">Manuel Toledo</a>. The source code
          is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
        </p>
      </div>
      <button
        class="button is-success is-outlined"
        type="button"
        @click="logout()"
        v-if="isLogged"
      >
        Logout
      </button>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLogged"]),
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
}

#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem; /* Footer height */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
