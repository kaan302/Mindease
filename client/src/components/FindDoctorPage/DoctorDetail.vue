<template>
  <div class="doctor-detail">
    <!-- Circular profile picture -->
    <div class="profile-picture">
      <img src="../../assets/img/team-1.jpg" alt="Doctor's Profile" />
    </div>

    <!-- Doctor information -->
    <div class="doctor-info">
      <h2>{{ doctor.doctorFirstName }} {{ doctor.doctorLastName }}</h2>
      <p>Profession: {{ doctor.doctorProfession }}</p>
      <p>Language: {{ doctor.doctorLanguage }}</p>
      <p>Rating: {{ doctor.doctorRating }}</p>
      <!-- Add more doctor details as needed -->
    </div>
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
.doctor-detail {
  align-items: center;
  gap: 20px;
  background: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px; /* Add padding for spacing */
}

.profile-picture {
  width: 100px; /* Adjust the size of the circular picture */
  height: 100px; /* Adjust the size of the circular picture */
  border-radius: 50%; /* Create a circular shape */
  overflow: hidden; /* Hide any overflowing content */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); /* Optional: Add a shadow */
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the circular area */
}
</style>