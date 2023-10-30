<template>

  <div class="container">

    {{ therapists }}

  </div>

</template>

<script>

import TherapistData from '../../data/doctor.json'

export default {
  name: "FindDoctorChild",
  components: {

  },
  props: {
    selectedProfession: String,
  },
  data() {
    return {
      therapists: "",
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
  methods: {
    filterTherapistsByProfession() {
      if (this.selectedProfession != null) {
        // Filter therapists based on the selected profession
        this.therapists = TherapistData.filter(therapist => therapist.therapistProfession === this.selectedProfession);
      } else {
        // If no profession is selected, return all therapists
        return this.therapists = "no work";
      }
    },
  },
  mounted() {
    this.filterTherapistsByProfession()
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 5px;
  border-radius: 12px;
  margin-left: auto;
  margin-right: auto;
  color: black;
  border: 2px solid #006373;
}

.doctor-detail {
  align-items: center;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-radius: 12px;

}


.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the circular area */
}

</style>