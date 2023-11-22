<template>
  <div class="container">
    <div class="row">
      <div v-for="profession in uniqueProfessions" :key="profession" class="col menu-item text-center"
           @click="selectProfession(profession)">
        <i :class="getIconClass(profession)" class="icon"></i><br>
        <span>{{ profession }}</span>
      </div>
    </div>

    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h1 class="d-inline-block border rounded-pill py-1 px-4 mt-2 mb-2">{{ selectedProfession }}</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4" v-for="therapist in filteredTherapists" :key="therapist.therapistId">
        <FindDoctorChild :selected-profession="selectedProfession" :selected-therapists="therapist"></FindDoctorChild>
      </div>
    </div>

  </div>

</template>

<script>

import DoctorData from '../../data/doctor.json'
import FindDoctorChild from "@/components/FindDoctorPage/FindDoctorChild";

const professionIcons = {
  'Relationship Issues': 'fas fa-heart-broken',
  'Depression': 'fas fa-tint',
  'Eating Disorders': 'fas fa-apple-alt',
  'Anxiety Disorders': 'fas fa-brain',
  'Substance Abuse and Addiction': 'fas fa-capsules',
  'Stress Management': 'fas fa-male',
};

export default {
  name: "FindDoctor",
  components: {FindDoctorChild},
  data() {
    return {
      doctors: DoctorData,
      uniqueProfessions: [],
      selectedProfession: "Anxiety Disorders",
      filteredTherapists: []
    }
  },
  watch: {
    selectedProfession: {
      immediate: true, // This will trigger the watcher immediately on component creation
      handler(newProfession) {
        this.filterTherapistsByProfession(newProfession);
      }
    }
  },
  mounted() {
    this.extractUniqueProfessions();
    this.filterTherapistsByProfession()
  },
  methods: {
    extractUniqueProfessions() {
      // Use a Set to store unique professions
      const uniqueProfessionsSet = new Set();

      // Iterate through the JSON data and add professions to the Set
      this.doctors.forEach((doctor) => {
        uniqueProfessionsSet.add(doctor.therapistProfession);
      });

      // Convert the setback to an array
      this.uniqueProfessions = Array.from(uniqueProfessionsSet);
    },
    getIconClass(profession) {
      return professionIcons[profession] || 'fas fa-stethoscope'; // Default icon if profession not found
    },
    selectProfession(profession) {
      // Set the selected profession when a menu item is clicked
      this.selectedProfession = profession;
    },
    filterTherapistsByProfession() {
      if (this.selectedProfession != null) {
        // Filter therapists based on the selected profession
        this.filteredTherapists = DoctorData.filter(therapist => therapist.therapistProfession === this.selectedProfession);
      } else {
        // If no profession is selected, return all therapists
        return this.therapists = "no work";
      }
    },
  }
}

</script>

<style scoped>
.menu-item {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #dee2e6;
  margin-right: 10px; /* Add margin between items */
  margin-top: 1%;
  transition: 0.7s;
}

.menu-item:hover {
  background-color: #5986CE;

}

.icon {
  font-size: 36px;
  color: #DE6520;
}

</style>