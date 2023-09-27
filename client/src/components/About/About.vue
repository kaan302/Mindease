<template>
  <!-- Page Header Start -->
  <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
      <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol class="breadcrumb text-uppercase mb-0">
          <li class="breadcrumb-item text-primary active" aria-current="page">About</li>
        </ol>
      </nav>
    </div>
  </div>
  <!-- Page Header End -->


  <!-- About Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div class="d-flex flex-column">
            <img class="img-fluid rounded w-75 align-self-end" src="../../assets/img/about-1.jpg" alt="">
            <img class="img-fluid rounded w-50 bg-white pt-3 pe-3" src="../../assets/img/about-2.jpg" alt="" style="margin-top: -25%;">
          </div>
        </div>
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <p class="d-inline-block border rounded-pill py-1 px-4">About Us</p>
          <h1 class="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
          <p><i class="far fa-check-circle text-primary me-3"></i>Quality health care</p>
          <p><i class="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
          <p><i class="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
          <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->


  <!-- Feature Start -->
  <div class="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
    <div class="container feature px-lg-0">
      <div class="row g-0 mx-lg-0">
        <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
          <div class="p-lg-5 ps-lg-0">
            <p class="d-inline-block border rounded-pill text-light py-1 px-4">Features</p>
            <h1 class="text-white mb-4">Why Choose Us</h1>
            <p class="text-white mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
            <div class="row g-4">
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                    <i class="fa fa-user-md text-primary"></i>
                  </div>
                  <div class="ms-4">
                    <p class="text-white mb-2">Experience</p>
                    <h5 class="text-white mb-0">Doctors</h5>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                    <i class="fa fa-check text-primary"></i>
                  </div>
                  <div class="ms-4">
                    <p class="text-white mb-2">Quality</p>
                    <h5 class="text-white mb-0">Services</h5>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                    <i class="fa fa-comment-medical text-primary"></i>
                  </div>
                  <div class="ms-4">
                    <p class="text-white mb-2">Positive</p>
                    <h5 class="text-white mb-0">Consultation</h5>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                    <i class="fa fa-headphones text-primary"></i>
                  </div>
                  <div class="ms-4">
                    <p class="text-white mb-2">24 Hours</p>
                    <h5 class="text-white mb-0">Support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style="min-height: 400px;">
          <div class="position-relative h-100">
            <img class="position-absolute img-fluid w-100 h-100" src="../../assets/img/feature.jpg" style="object-fit: cover;" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Feature End -->

</template>

<script>
export default {
  name: "AboutComponent"
}
</script>

<style scoped>
:root {
  --primary: #05A3A4;
  --light: #E8891D;
  --dark: #006373;
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

.page-header {
  background: url(../../assets/img/header-page.jpg) top center no-repeat;
  background-size: cover;
  text-shadow: 0 0 30px rgba(0, 0, 0, .1);
}

.breadcrumb-item + .breadcrumb-item::before {
  color: var(--light);
}

/*** Feature ***/
@media (min-width: 992px) {
  .container.feature {
    max-width: 100% !important;
  }

  .feature-text  {
    padding-left: calc(((100% - 960px) / 2) + .75rem);
  }
}

@media (min-width: 1200px) {
  .feature-text  {
    padding-left: calc(((100% - 1140px) / 2) + .75rem);
  }
}

@media (min-width: 1400px) {
  .feature-text  {
    padding-left: calc(((100% - 1320px) / 2) + .75rem);
  }
}
</style>