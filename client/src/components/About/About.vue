<template>
  <!-- Page Header Start -->
  <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
      <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
      <nav aria-label="breadcrumb animated slideInDown">
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
          <p>At Mindease, we understand the significance of mental well-being in today's fast-paced world. We are more than just a platform; we are a community of caring professionals and individuals dedicated to making mental healthcare accessible, approachable, and effective.</p>
          <p class="mb-4">Our mission at Mindease is simple yet profound: to empower lives by providing exceptional mental health support. We believe that everyone deserves access to high-quality mental health services tailored to their unique needs. By bridging the gap between individuals and mental health professionals, we facilitate a safe and nurturing environment where healing begins.</p>
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
            <p class="text-white mb-4 pb-2">Compassionate Care: Our team of experienced therapists and counselors are deeply compassionate about mental health. We approach every individual with empathy and understanding, ensuring you feel heard and supported.

              Holistic Approach: We recognize that mental health is interconnected with various aspects of life. Our approach is holistic, considering not only your symptoms but also the underlying causes and personal circumstances.</p>
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

.fa-check-circle:before {
  color: #05A3A4;
}

.btn.btn-primary {
  background-color: #05A3A4;
  border-color: #05A3A4;
}

.breadcrumb-item.active {
  color: #05A3A4;
}

.rounded-pill{
  color: #006373;
}

.feature-text {
  background-color: #05A3A4;
}

.fa-user-md:before {
  color: #006373;
}

.fa-comment-medical:before {
  color: #006373;
}

.fa-check:before {
  color: #006373;
}

.fa-headphones:before {
  color: #006373;
}

.bg-primary {
  background-color: #05A3A4, var(--bs-bg-opacity) !important;
}
</style>