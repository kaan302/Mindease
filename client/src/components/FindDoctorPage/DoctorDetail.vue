<template>
  <div class="doctor-detail row justify-content-center align-items-center">
    <!-- Circular profile picture -->
    <div class="col-md-4 text-center">
      <div class="profile-picture rounded-circle overflow-hidden shadow d-flex justify-content-center align-items-center">
        <img class="img-fluid" src="../../assets/img/team-1.jpg" :alt="`Profile of ${doctor.doctorFirstName} ${doctor.doctorLastName}`" />
      </div>
    </div>

    <!-- Doctor information -->
    <div class="col-md-8 text-center">
      <h2 class="mb-3">{{ doctor.doctorFirstName }}<br> {{ doctor.doctorLastName }}</h2>
      <p><strong>Profession:</strong> {{ doctor.doctorProfession }}</p>
      <p><strong>Language:</strong> {{ doctor.doctorLanguage }}</p>
      <p><i class="fa fa-star icon text-warning"></i> {{ doctor.doctorRating }}</p>
      <!-- Add more doctor details as needed -->
      <router-link :to="{ name: 'appointment', query: { doctor: JSON.stringify(doctor) } }">
        <button class="btn btn-primary btn-lg doctor-button">Book Consultant</button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 70px;
}

@media (max-width: 1200px) {
  .profile-picture{
    width: 150px;
    height: 150px;
    position: relative;
    right: 50px;
  }
}

@media (max-width: 768px) {
  .profile-picture{
    width: 150px;
    height: 150px;
    position: relative;
    left: 24px;
  }
}

@media (max-width: 576px) {
  .profile-picture{
    width: 180px;
    height: 180px;
    position: relative;
    left: 70px;
  }
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon {
  font-size: 20px;
}

.doctor-button {
  font-size: 18px;
  border-radius: 12px;
  background-color: #E8891D;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.5s;
}

.doctor-button:hover {
  background-color: #05A3A4;
  color: white;
}
</style>
