<template>
  <section class="hero block is-small is-success">
    <div class="hero-body">
      <p class="title">
        Hello, <strong>{{ getName }}</strong>
      </p>
    </div>
  </section>
  <div class="container about block">
    <div class="columns is-multiline is-mobile">
      <div
        v-for="medication in allMedications"
        class="column is-3"
        :key="medication"
      >
        <div class="card" style="border-radius: 20px">
          <header class="card-header" style="border-radius: 20px 25px 0 0">
            <p class="card-header-title">
              {{ medication.name }}
            </p>
            <button
              v-on:click="deleteMedication(medication.id)"
              class="delete mt-4 mr-3"
            ></button>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="is-flex is-justify-content-start">
                Dosage: {{ medication.dosage }}
              </div>
              <div class="is-flex is-justify-content-start">
                Schedule: {{ medication.schedule }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button @click="toggleModal()" class="block button is-success is-outlined">
    <span class="icon-text">
      <span>Add new medication</span>
      <span class="icon">
        <i class="fas fa-plus"></i>
      </span>
    </span>
  </button>
  <div
    id="createModal"
    v-bind:class="{ 'is-active': clicked }"
    class="modal sTransition"
  >
    <div class="modal-background" @click="toggleModal()"></div>
    <div class="modal-content">
      <CreateMedicationComponent />
    </div>
    <button
      class="modal-close is-large"
      @click="toggleModal()"
      aria-label="close"
    ></button>
  </div>
</template>

<script>
import CreateMedicationComponent from "@/components/CreateMedicationComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  components: { CreateMedicationComponent },
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    toggleModal() {
      this.clicked = !this.clicked;
    },

    deleteMedication(id) {
      this.$store
        .dispatch("deleteMedication", {
          id: id,
        })
        .catch((err) => {
          console.dir(err.response.data.errors);
        });
      console.log("hello: " + id);
    },
  },

  computed: {
    ...mapGetters(["allMedications", "getName"]),
  },
  mounted() {
    this.$store.dispatch("medication").catch((err) => {
      console.log(err);
    });
  },
};
</script>

<style scoped>
.sTransition {
  transition: all 2s ease 0s !important;
}
</style>
