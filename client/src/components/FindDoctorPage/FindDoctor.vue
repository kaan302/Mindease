<template>

  <div class="horizontal-menu">
    <div v-for="profession in uniqueProfessions" :key="profession" class="menu-item">
      <i :class="getIconClass(profession)" class="icon"></i><br>
      <span>{{ profession }}</span>
    </div>
  </div>

</template>

<script>

const professionIcons = {
  Cardiologist: 'fas fa-heart',
  Dermatologist: 'fas fa-sun',
  Pediatrician: 'fas fa-child',
  OrthopedicSurgeon: 'fas fa-bone',
  Psychiatrist: 'fas fa-brain',
  Ophthalmologist: 'fas fa-eye',
  Dentist: 'fas fa-tooth',
  Gynecologist: 'fas fa-venus',
};

import DoctorData from '../../data/doctor.json'

export default {
  name: "FindDoctor",
  data() {
    return {
      doctors: DoctorData,
      uniqueProfessions: [],
    }
  },
  mounted() {
    this.extractUniqueProfessions();
  },
  methods: {
    extractUniqueProfessions() {
      // Use a Set to store unique professions
      const uniqueProfessionsSet = new Set();

      // Iterate through the JSON data and add professions to the Set
      this.doctors.forEach((doctor) => {
        uniqueProfessionsSet.add(doctor.doctorProfession);
      });

      // Convert the Set back to an array
      this.uniqueProfessions = Array.from(uniqueProfessionsSet);
    },
    getIconClass(profession) {
      return professionIcons[profession] || 'fas fa-stethoscope'; // Default icon if profession not found
    },
  }
}

</script>

<style scoped>

.horizontal-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
  padding-bottom: 1%;
  border-bottom: 2px solid black;
}

.menu-item {
  text-align: center;
  cursor: pointer;
}

.icon {
  font-size: 36px;
}

</style>