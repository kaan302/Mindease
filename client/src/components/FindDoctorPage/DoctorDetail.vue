<template>
  <div class="doctor-detail row justify-content-center">
    <!-- Circular profile picture -->
    <div class="col-md-4 d-flex justify-content-center align-items-center">
      <div class="profile-picture rounded-circle overflow-hidden shadow">
        <img class="img-fluid" src="../../assets/img/team-1.jpg" :alt="`Profile of ${doctor.doctorFirstName} ${doctor.doctorLastName}`" />
      </div>
    </div>

    <!-- Doctor information -->
    <div class="col-md-8 text-center">
      <h2 class="mb-3">{{ doctor.doctorFirstName }} {{ doctor.doctorLastName }}</h2>
      <p><strong>Profession:</strong> {{ doctor.doctorProfession }}</p>
      <p><strong>Language:</strong> {{ doctor.doctorLanguage }}</p>
      <p><i class="fa fa-star icon text-warning"></i> {{ doctor.doctorRating }}</p>
      <!-- Add more doctor details as needed -->
      <router-link :to="{ name: 'appointment', query: { doctor: JSON.stringify(doctor) } }">
        <button class="btn btn-primary btn-lg">Book Consultant</button>
      </router-link>
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
.profile-picture {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon {
  font-size: 20px;
}
</style>
