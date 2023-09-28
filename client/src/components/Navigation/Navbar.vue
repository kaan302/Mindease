<template>
  <!-- Topbar Start -->
  <div class="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
    <div class="row gx-0 d-none d-lg-flex">
      <div class="col-lg-7 px-5 text-start">
        <div class="h-100 d-inline-flex align-items-center py-3 me-4">
          <small class="fa fa-map-marker-alt text-primary me-2"></small>
          <small>123 Street, Amsterdam, Netherlands</small>
        </div>
        <div class="h-100 d-inline-flex align-items-center py-3">
          <small class="far fa-clock text-primary me-2"></small>
          <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
        </div>
      </div>
      <div class="col-lg-5 px-5 text-end">
        <div class="h-100 d-inline-flex align-items-center py-3 me-4">
          <small class="fa fa-phone-alt text-primary me-2"></small>
          <small>+012 345 6789</small>
        </div>
        <div class="h-100 d-inline-flex align-items-center">
          <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-facebook-f"></i></a>
          <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-twitter"></i></a>
          <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-linkedin-in"></i></a>
          <a class="btn btn-sm-square rounded-circle bg-white text-primary me-0" href=""><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
  <!-- Topbar End -->

  <!-- Navbar Start -->
  <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
    <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h1 class="m-0 text-primary"><i class="far fa-hospital me-3"></i>Clinics</h1>
    </a>
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <router-link to="home-professionals" class="nav-item nav-link">Home</router-link>
        <router-link to="/all-consults" class="nav-item nav-link">Consults</router-link>
        <router-link to="/about" class="nav-item nav-link">About</router-link>
        <router-link to="/contact" class="nav-item nav-link">Contact</router-link>
      </div>
      <a href="" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i class="fa fa-arrow-right ms-3"></i></a>
    </div>
  </nav>
  <!-- Navbar End -->
</template>

<script>
export default {
  name: "NavbarComponent"
}
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';

:root {
  --primary: #05A3A4;
  --light: #E8891D;
  --dark: #006373;
}

/*** Navbar ***/
.navbar .dropdown-toggle::after {
  border: none;
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  vertical-align: middle;
  margin-left: 8px;
}

.navbar .navbar-nav .nav-link {
  margin-right: 30px;
  padding: 25px 0;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  outline: none;
}

.navbar .navbar-nav .nav-link:hover,
.navbar .navbar-nav .nav-link.active {
  color: var(--primary);
}

@media (max-width: 991.98px) {
  .navbar .navbar-nav .nav-link {
    margin-right: 0;
    padding: 10px 0;
  }

  .navbar .navbar-nav {
    border-top: 1px solid #EEEEEE;
  }
}

.navbar .navbar-brand,
.navbar a.btn {
  height: 75px;
}

.navbar .navbar-nav .nav-link {
  color: var(--dark);
  font-weight: 500;
}

.navbar.sticky-top {
  top: -100px;
  transition: .5s;
}

@media (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: block;
    border: none;
    margin-top: 0;
    top: 150%;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
  }

  .navbar .nav-item:hover .dropdown-menu {
    top: 100%;
    visibility: visible;
    transition: .5s;
    opacity: 1;
  }
}

:root {
  --primary: #05A3A4;
  --light: #E8891D;
  --dark: #006373;
}

/*** Navbar ***/
.navbar .dropdown-toggle::after {
  border: none;
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  vertical-align: middle;
  margin-left: 8px;
}

.navbar .navbar-nav .nav-link {
  margin-right: 30px;
  padding: 25px 0;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  outline: none;
}

.navbar .navbar-nav .nav-link:hover,
.navbar .navbar-nav .nav-link.active {
  color: var(--primary);
}

@media (max-width: 991.98px) {
  .navbar .navbar-nav .nav-link {
    margin-right: 0;
    padding: 10px 0;
  }

  .navbar .navbar-nav {
    border-top: 1px solid #EEEEEE;
  }
}

.navbar .navbar-brand,
.navbar a.btn {
  height: 75px;
}

.navbar .navbar-nav .nav-link {
  color: var(--dark);
  font-weight: 500;
}

.navbar.sticky-top {
  top: -100px;
  transition: .5s;
}

@media (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: block;
    border: none;
    margin-top: 0;
    top: 150%;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
  }

  .navbar .nav-item:hover .dropdown-menu {
    top: 100%;
    visibility: visible;
    transition: .5s;
    opacity: 1;
  }
}

</style>