<template>
  <div class="container pt-5 is-flex is-justify-content-center">
    <div>
      <div class="box p-6">
        <form @submit.prevent="register" class="login-section">
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="name"
                class="input is-success"
                type="text"
                placeholder="Name"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="email"
                class="input is-success"
                type="email"
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

          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="password_confirmation"
                class="input is-success"
                type="password"
                placeholder="Retype Password"
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
            Register
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
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },

  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(() => {
          this.$router.push({ name: "About" });
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
