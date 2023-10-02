<template>
  <div class="landing">
    <div v-motion-fade class="centered-text">
      <h1>Give yourself a break</h1><br>
      <p>Online Therapy</p><br>
      <p>Anywhere.Anytime. Your fee</p>
    </div>

    <div v-motion-fade class="button-section">
      <LandingButton @click="goToPatient">I'm a patient</LandingButton>
      <br>
      <LandingButton @click="goToProfessionals">I'm a therapist</LandingButton>
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
.landing {
  background-image: url("../../assets/img/landing-background.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
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
}

.centered-text h1 {
  font-size: 120px;
  font-weight: normal;
}

.centered-text p {
  font-size: 48px;
}

.button-section {
  text-align: center;
  position: relative;
  top: 30%;
  margin-top: 2%;
  overflow: hidden;
}

</style>