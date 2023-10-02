<template>
  <div class="landing container-fluid">
    <div class="background-image"></div>
    <div v-motion-fade class="centered-text row">
      <h1 class="col-12">Give yourself a break</h1>
      <p class="col-12">Online Therapy</p>
      <p class="col-12">Anywhere.Anytime. Your fee</p>
    </div>

    <div v-motion-fade class="button-section row">
      <div class="col-12 mb-2">
        <LandingButton @click="goToPatient">I'm a patient</LandingButton>
      </div>
      <div class="col-12">
        <LandingButton @click="goToProfessionals">I'm a therapist</LandingButton>
      </div>
    </div>
  </div>
</template>

<script>
import LandingButton from "@/components/LandingPage/LandingButton";

export default {
  name: "LandingComponent",
  components: {
    LandingButton
  },
  methods: {
    goToProfessionals() {
      this.$router.push("/home-professionals");
    },
    goToPatient() {
      this.$router.push("/#");
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.landing {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  background-image: url("../../assets/img/landing-background.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.centered-text {
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  width: 75%;
  padding-top: 3%;
  padding-bottom: 3%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 30%;
}

.centered-text h1, p {
  margin: 0;
  padding: 0;
  color: white;
  font-size: 80px;
}

.button-section {
  text-align: center;
  position: relative;
  top: 30%;
  margin-top: 2%;
  overflow: hidden;
}
</style>
