<template>
  <div class="container pt-5 is-flex is-justify-content-center">
    <div>
      <div class="box p-6">
        <form @submit.prevent="addMedication" class="login-section">
          <div class="field">
            <div class="control">
              <input
                v-model="name"
                class="input is-success"
                type="text"
                placeholder="Medication name"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input
                v-model="dosage"
                class="input is-success"
                type="text"
                placeholder="Dosage"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input
                v-model="schedule"
                class="input is-success"
                type="text"
                placeholder="List Schedule"
              />
            </div>
          </div>
          <button type="submit" class="button is-success is-outlined">
            Click here to add
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateMedicationComponent",
  data() {
    return {
      name: "",
      dosage: "",
      schedule: "",
    };
  },

  methods: {
    addMedication() {
      console.log(this.name);
      console.log(this.dosage);
      console.log(this.schedule);
      this.$store
        .dispatch("addMedication", {
          name: this.name,
          dosage: this.dosage,
          schedule: this.schedule,
        })
        .catch((err) => {
          console.dir(err.response.data.errors);
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
