<template>
  <div id="page-container">
    <div id="content-wrap">
      <NavComponent />
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
        class="mb-6 button is-success is-outlined"
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
import NavComponent from "@/components/NavComponent.vue";

export default {
  components: { NavComponent },
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
html,
body {
  height: 100%;
}
::selection {
  background: #42b983; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #42b983; /* Gecko Browsers */
}

#page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* height: 100%; */
}

#content-wrap {
  flex: 1;
  min-height: 100vh;
}

/* #footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
