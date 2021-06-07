<template>
  <div class="container pt-5 is-flex is-justify-content-center">
    <div>
      <div class="box p-6">
        <form @submit.prevent="login" class="login-section">
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="email"
                class="input is-success"
                type="text"
                placeholder="Email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-at"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="password"
                class="input is-success"
                type="password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-key"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>
          <button type="submit" class="button is-success is-outlined">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 430px) {
  .login-section {
    width: 20em;
  }
}

.box {
  border-radius: 25px;
}

.container {
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
