<template>
  <div id="nav">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <svg
            class="spookyImg"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="80.00"
            height="80.00"
            viewBox="0 0 2048.0 2048.0"
          >
            <g id="document" transform="matrix(1,0,0,1,1024.0,1024.0)">
              <path
                d="M-735.015,18.2416 C-735.015,424.846 -406.604,753.257 6.83586e-05,753.257 C403.477,753.257 731.888,424.846 735.016,21.3693 C731.888,121.457 650.567,199.65 550.48,199.65 C450.393,199.65 365.944,118.329 365.944,15.1139 C365.944,-422.768 365.944,225.721 365.944,-202.777 C365.944,-506.167 118.854,-753.257 -184.536,-753.257 C-487.925,-753.257 -735.015,-506.167 -735.015,-202.777 L-735.015,18.2416 Z M-460.035,-303.001 C-395.558,-303.001 -342.624,-250.465 -343.022,-185.988 L-343.022,-22.0113 C-343.022,42.4651 -395.956,95.0014 -460.035,95.0014 C-524.113,95.0014 -577.048,42.8631 -577.048,-22.0113 L-577.048,-185.988 C-577.048,-250.465 -524.511,-303.001 -460.035,-303.001 Z M-117.015,-303.001 C-52.5386,-303.001 0.395774,-250.465 -0.00222982,-185.988 L-0.00222982,-22.0113 C-0.00222982,42.4651 -52.9366,95.0014 -117.015,95.0014 C-181.093,95.0014 -234.028,42.8631 -234.028,-22.0113 L-234.028,-185.988 C-234.028,-250.465 -181.491,-303.001 -117.015,-303.001 Z "
                fill="#48c774"
                fill-opacity="1.00"
              />
            </g>
          </svg>
        </a>
        <div class="navbar-burger" data-target="navbar-items">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbar-items" class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <router-link to="/">Home</router-link>
              </p>
              <p class="control">
                <router-link to="/about" v-if="isLogged">About</router-link>
              </p>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a
              class="navbar-link"
              href="https://bulma.io/documentation/overview/start/"
            >
              Docs
            </a>
            <div class="navbar-dropdown is-boxed">
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/overview/start/"
              >
                Overview
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/overview/modifiers/"
              >
                Modifiers
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/columns/basics/"
              >
                Columns
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/layout/container/"
              >
                Layout
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/form/general/"
              >
                Form
              </a>
              <hr class="navbar-divider" />
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/elements/box/"
              >
                Elements
              </a>
              <a
                class="navbar-item is-active"
                href="https://bulma.io/documentation/components/breadcrumb/"
              >
                Components
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <router-link to="/dashboard" v-if="isLogged"
                  >Dashboard</router-link
                >
              </p>
              <p class="control">
                <router-link to="/login" v-if="!isLogged">Login</router-link>
                <a id="logoutBtn" v-else @click="logout">Logout</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- <router-link to="/dashboard" v-if="isLogged">Dashboard</router-link>
    <router-link to="/about" v-if="isLogged">About</router-link>
    <router-link to="/login" v-else>Login</router-link> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavComponent",
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

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a:hover {
  color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#logoutBtn:hover {
  color: #42b983;
}
</style>
