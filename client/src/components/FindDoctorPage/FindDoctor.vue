<template>

  <div class="horizontal-menu">
    <div v-for="profession in uniqueProfessions"
         :key="profession"
         class="menu-item"
         @click="selectProfession(profession)">
      <i :class="getIconClass(profession)" class="icon"></i><br>
      <span>{{ profession }}</span>
    </div>
  </div>
  <div class="content">

    <FindDoctorChild
        :selected-profession="selectedProfession"
        :doctors="filteredDoctors"
    />
  </div>

</template>

<script>

import DoctorData from '../../data/doctor.json'
import FindDoctorChild from "@/components/FindDoctorPage/FindDoctorChild";

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

export default {
  name: "FindDoctor",
  components: {
    FindDoctorChild
  },
  data() {
    return {
      doctors: DoctorData,
      uniqueProfessions: [],
      selectedProfession: "",
    }
  },
  computed: {
    filteredDoctors() {
      // Filter doctors based on the selected profession
      if (!this.selectedProfession) {
        return ;
      }
      return this.doctors.filter(
          (doctor) => doctor.doctorProfession === this.selectedProfession
      );
    },
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

.horizontal-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
  padding-bottom: 1%;
  border-bottom: 2px solid #006373;
}

.content {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.menu-item {
  text-align: center;
  cursor: pointer;
}

.icon {
  font-size: 36px;
  color: #05A3A4
}


</style>