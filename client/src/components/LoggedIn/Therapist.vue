<template>
  <div class="container-fluid header-container">
    <div class="background-image"></div>
    <div class="row">
      <div class="col text-center">
        <h1>View your sessions</h1>
        <button class="btn btn-primary" @click="goToPage">Your consultancies</button>
      </div>
    </div>
  </div>

  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center mb-5">
          <h2 class="section-title">How It Works for Therapists</h2>
          <p class="section-subtitle">Thank you for joining Mindease as a Therapist!</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="step">
            <h3 class="step-title">Create Your Profile</h3>
            <p>Sign up and create a detailed profile showcasing your expertise, experience, and specialization.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="step">
            <h3 class="step-title">Set Your Availability</h3>
            <p>Specify your working hours and availability for online consultations with clients.</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="step">
            <h3 class="step-title">Connect with Clients</h3>
            <p>Get matched with clients seeking therapy. Conduct secure and confidential video consultations.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "TherapistComponent",
  methods: {
    goToPage(){
      this.$router.push("/therapist-consults");
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
  background: url('../../assets/img/therapist-header.jpg') no-repeat center center/cover;
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

.step-title {
  font-size: 24px;
  font-weight: bold;
  color: #DE6520;
  margin-bottom: 8px;
}

.p {
  font-size: 18px;
  color: #666;
}

</style>