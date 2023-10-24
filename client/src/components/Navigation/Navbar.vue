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
          <li class="nav-item" v-if="!['patient', 'professionals', 'signup'].includes($route.name)">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>

        <!-- Login Button -->
        <button class="btn btn-primary login" style="padding: 10px 20px;">Login</button>

      </div>
    </div>
  </nav>
</template>





<script>
export default {
  name: "NavbarComponent"
}
</script>

<style scoped>

/* Custom style for the logo image */
.logo-img {
  max-width: 180px;
  position: relative;
  bottom: 85%;
}

.login{
  background-color: white;
  color: #5986CE;
}

.login:hover{
  background-color: #5986CE;
  color: white;
}

</style>