<template>
  <div class="background">

    <div class="container">
      <div class="row justify-content-center align-items-center mb-4">
        <img src="../../assets/img/logo.jpeg" alt="Logo" class="img-fluid" style="max-width: 300px;">
      </div>

      <!-- Second Row: Main Text -->
      <div class="row justify-content-center mb-4">
        <div class="col-md-12 text-center">
          <h2 class="display-1">Give Yourself A Break</h2>
        </div>
      </div>

      <!-- Third and Fourth Row: Smaller Text (Online Therapy, Anywhere. Anytime. Your fee.) -->
      <div class="row justify-content-center mb-2 d-flex align-items-center">
        <div class="col-md-12 text-center">
          <p class="custom-text">
            Online Therapy<br>
            Anywhere. Anytime. Your fee.
          </p>
        </div>
      </div>

      <!-- Fifth Row: Button (I'm a patient) -->
      <div class="row justify-content-center mb-4">
        <button class="btn btn-primary custom-button" style="width: 150px;" @click="goToPatient">I'm a patient</button>
      </div>

      <!-- Sixth Row: Button (I'm a therapist) -->
      <div class="row justify-content-center">
        <button class="btn btn-primary custom-button" style="width: 150px;" @click="goToProfessionals">I'm a therapist
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingComponent",
  methods: {
    goToProfessionals() {
      this.$router.push("/home-professionals");
    },
    goToPatient() {
      this.$router.push("/home-patient");
    }
  }
}
</script>

<style scoped>

h2, p {
  text-align: center;
  color: white;
}

/* Custom styles for smaller text */
.custom-text {
  font-size: 1rem; /* Adjust the font size as needed */
}

@media (min-width: 576px) {
  .custom-text {
    font-size: 1.25rem; /* Increase font size for medium screens and above */
  }
}

/* Custom styles for the buttons */
.custom-button {
  background-color: #F48711;
  color: white; /* Text color */
  font-weight: bold;
  border: none;
}

.custom-button:hover {
  background-color: #F46E0F;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh; /* 85% of the viewport height */
}

.background{
  height: 100vh; /* 100% of the viewport height */
  width: 100vw; /* 100% of the viewport width */
  background: url('../../assets/img/landing-background.jpg') no-repeat center center/cover;
}

</style>
