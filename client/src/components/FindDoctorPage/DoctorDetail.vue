<template>
  <div class="doctor-detail">
    <!-- Display doctor information -->
    <h2>{{ doctor.doctorFirstName }} {{ doctor.doctorLastName }}</h2>
    <p>Profession: {{ doctor.doctorProfession }}</p>
    <p>Language: {{ doctor.doctorLanguage }}</p>
    <p>Rating: {{ doctor.doctorRating }}</p>
    <!-- Add more doctor details as needed -->
  </div>
</template>

<script>
export default {
  name: "DoctorDetail",
  props: {
    doctor: Object,
  }
}
</script>

<style scoped>

</style>