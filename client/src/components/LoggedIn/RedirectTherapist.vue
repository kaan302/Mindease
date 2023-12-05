<template>
  <div class="background">

    <div class="container">

      <!-- Container for Main and Smaller Text -->
      <div class="row justify-content-center mb-4">
        <div class="col-md-12 text-center">
          <div class="text-box">
            <!-- Second Row: Main Text -->
            <h2 class="display-1 mb-4">Thanks for joining!</h2>

            <!-- Third and Fourth Row: Smaller Text (Online Therapy, Anywhere. Anytime. Your fee.) -->
            <p class="custom-text mb-0">
              Currently, we aren't live. But we will contact you soon!<br>
              Stay tuned!
            </p>
          </div>
        </div>
      </div>

      <!-- Fifth Row: Button (I'm a patient) -->
      <div class="row justify-content-center mb-4">
        <button class="btn btn-primary custom-button" style="width: 150px;" @click="goToPage">Go to your page</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "RedirectTherapist",
  methods: {
    goToPage() {
      this.$router.push("/therapist");
    },
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

.custom-button-blue {
  background-color: #5986CE;
  color: white; /* Text color */
  font-weight: bold;
  border: none;
}


.custom-button-blue:hover {
  background-color: #006373;
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
  width: 98.9vw; /* 100% of the viewport width */
  background: url('../../assets/img/coming-soon.jpg') no-repeat center center/cover;
}

/* Style for the black box with opacity */
.text-box {
  background-color: rgba(0, 0, 0, 0.5); /* Black with 70% opacity */
  padding: 20px;
  border-radius: 10px;
}

/* Style for the smaller text */
.custom-text {
  font-size: 1rem; /* Adjust the font size as needed */
}

@media (min-width: 576px) {
  .custom-text {
    font-size: 1.25rem; /* Increase font size for medium screens and above */
  }
}

</style>