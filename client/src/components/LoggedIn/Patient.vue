<template>
  <div class="container-fluid header-container">
    <div class="background-image"></div>
    <div class="row">
      <div class="col text-center">
        <h1>Book your first consultant</h1>
        <button class="btn btn-primary" @click="goToPage">Book now!</button>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <!-- First Row -->
    <div class="row mb-4">
      <!-- First Column -->
      <div class="col-md-6">
        <h2 class="title">1. Browse Available Therapists</h2>
        <h4 class="subtitle">Once logged in, browse the list of available therapists. You can filter therapists based on specialties, availability, and other criteria.</h4>
      </div>
      <!-- Second Column -->
      <div class="col-md-6">
        <h2 class="title">2. View Therapist Profiles</h2>
        <h4 class="subtitle">Click on a therapist's profile to view their credentials, specialties, and available time slots</h4>
      </div>
    </div>

    <!-- Second Row -->
    <div class="row">
      <!-- First Column -->
      <div class="col-md-6">
        <h2 class="title">3. Select a Suitable Time</h2>
        <h4 class="subtitle">Choose a date and time that suits your schedule from the therapist's available slots.</h4>
      </div>
      <!-- Second Column -->
      <div class="col-md-6">
        <h2 class="title">4. Confirm the Session</h2>
        <h4 class="subtitle">Confirm the selected date and time for your consultancy session.</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientComponent",
  methods: {
    goToPage(){
      this.$router.push("/find-doctor");
    }
  }
}
</script>

<style scoped>
.header-container {
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/patient-header.jpg') no-repeat center center/cover;
  opacity: 0.5; /* Background overlay with 0.5 opacity */
  z-index: -1; /* Place the background behind other elements */
}

.btn-primary{
  background-color: #DE6520;
  border: none;
  padding: 2%;
  width: 50%;
}

.btn-primary:hover{
  background-color: #5986CE;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #DE6520;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 18px;
  color: #666;
}
</style>
