<template>

  <div class="container-fluid header bg-primary p-0 mb-5">
    <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
      <div class="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <h1 class="display-4 text-white mb-5">Good Health Is The Root Of All Heppiness</h1>
        <div class="row g-4">
          <div class="col-sm-4">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">123</h2>
              <p class="text-light mb-0">Expert Doctors</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">1234</h2>
              <p class="text-light mb-0">Medical Stuff</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">12345</h2>
              <p class="text-light mb-0">Total Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeProfessionals"
}
</script>

<style scoped>
/********** Template CSS **********/
:root {
  --primary: #0463FA;
  --light: #EFF5FF;
  --dark: #1B2C51;
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
  .navbar .navbar-nav .nav-link  {
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


/*** Header ***/
.header-carousel .owl-carousel-text {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 3rem;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 30px rgba(0, 0, 0, .1);
}

.header-carousel .owl-nav {
  position: absolute;
  width: 200px;
  height: 45px;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}

.header-carousel .owl-nav .owl-prev,
.header-carousel .owl-nav .owl-next {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 45px;
  font-size: 22px;
  transition: .5s;
}

.header-carousel .owl-nav .owl-prev:hover,
.header-carousel .owl-nav .owl-next:hover {
  background: var(--primary);
  border-color: var(--primary);
}

.header-carousel .owl-dots {
  position: absolute;
  height: 45px;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-carousel .owl-dot {
  position: relative;
  display: inline-block;
  margin: 0 5px;
  width: 15px;
  height: 15px;
  background: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 15px;
  transition: .5s;
}

.header-carousel .owl-dot::after {
  position: absolute;
  content: "";
  width: 5px;
  height: 5px;
  top: 4px;
  left: 4px;
  background: #FFFFFF;
  border-radius: 5px;
}

.header-carousel .owl-dot.active {
  background: var(--primary);
  border-color: var(--primary);
}

/*.page-header {*/
/*  background: url(src/assets/img/header-page.jpg) top center no-repeat;*/
/*  background-size: cover;*/
/*  text-shadow: 0 0 30px rgba(0, 0, 0, .1);*/
/*}*/

</style>