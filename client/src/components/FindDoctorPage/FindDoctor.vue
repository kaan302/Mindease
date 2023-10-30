<template>
  <div class="container">
    <div class="row">
      <div v-for="profession in uniqueProfessions" :key="profession" class="col menu-item text-center"
           @click="selectProfession(profession)">
        <i :class="getIconClass(profession)" class="icon"></i><br>
        <span>{{ profession }}</span>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 d-flex justify-content-center">
      <h1 class="d-inline-block border rounded-pill py-1 px-4 mt-2 mb-2">{{ selectedProfession }}</h1>
    </div>
  </div>

  <FindDoctorChild :selected-profession="selectedProfession"></FindDoctorChild>

</template>

<script>

import DoctorData from '../../data/doctor.json'
import FindDoctorChild from "@/components/FindDoctorPage/FindDoctorChild";

const professionIcons = {
  'Relationship Issues': 'fas fa-heart',
  'Depression': 'fas fa-sun',
  'Eating Disorders': 'fas fa-bone',
  'Anxiety Disorders': 'fas fa-brain',
  'Substance Abuse and Addiction': 'fas fa-tooth',
  'Stressmanagement': 'fas fa-venus',
};

export default {
  name: "FindDoctor",
  components: {FindDoctorChild},
  data() {
    return {
      doctors: DoctorData,
      uniqueProfessions: [],
      selectedProfession: "Anxiety Disorders"
    }
  },
  computed: {},
  mounted() {
    this.extractUniqueProfessions();
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