<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #5986CE;">
    <div class="container">
      <!-- Logo on the Left -->
      <a class="navbar-brand" href="#">
        <img src="../../assets/img/logo.png" alt="Mindease Logo" class="logo-img">
      </a>

      <!-- Navbar Toggler for Mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Menu Items and Login Button -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <!-- Menu Items -->
        <ul class="navbar-nav">
          <li class="nav-item" v-if="['patient-consults', 'logged-patient', 'findDoctor', 'appointment'].includes($route.name)">
            <router-link to="/patient-consults" class="nav-link">Your Consults</router-link>
          </li>

          <li class="nav-item dropdown" v-if="'home-patient'.includes($route.name)">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Patient
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/find-doctor" class="dropdown-item">Book Consultant</router-link>
              <!-- Add more dropdown items as needed -->
            </div>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>

        <!-- Login Button -->

        <button v-if="['home-patient', 'home-professionals', 'signup'].includes($route.name)"
                class="btn btn-primary login" style="padding: 10px 20px;" @click="goToLogin">Login
        </button>
        <!--Profile icon-->
        <i v-if="!['home-patient', 'home-professionals', 'signup'].includes($route.name)" @click="goToPage" class="fas fa-user-circle fs-3 text-white mx-3"></i>

      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "NavbarComponent",
  methods: {
    goToPage(){
      this.$router.push("/profile");
    },
    goToLogin() {
      this.$router.push("/login");
    },
  }
}
</script>

<style scoped>

/* Custom style for the logo image */
.logo-img {
  max-width: 180px;
  position: relative;
  bottom: 85%;
}

.login {
  background-color: white;
  color: #5986CE;
}

.login:hover {
  background-color: #5986CE;
  color: white;
}

i{
  cursor: pointer;
}

</style>