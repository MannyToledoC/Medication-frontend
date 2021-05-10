<template>
  <!-- <div class="container about">
    <div class="columns is-multiline is-mobile">
      <img
        v-for="n in 30"
        class="box mx-2 column"
        :key="n"
        src="https://placekitten.com/300/300"
      />
    </div>
  </div> -->
  <!-- <div>{{ allMedications }}</div> -->
  <h3>Hello {{ getName }}</h3>
  <div class="container about">
    <div class="columns is-multiline is-mobile">
      <div
        v-for="medication in allMedications"
        class="column is-3"
        :key="medication"
      >
        <div class="card" style="border-radius: 25px">
          <header class="card-header" style="border-radius: 25px 25px 0 0">
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
  <CreateMedicationComponent />
</template>
<script>
import CreateMedicationComponent from "@/components/CreateMedicationComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "About",
  components: { CreateMedicationComponent },
  data() {
    return {};
  },
  methods: {
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
