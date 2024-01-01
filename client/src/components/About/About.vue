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
          <h1 class="mb-4">Why You Should Trust Us? <br> Get To Know About Us!</h1>
          <p>Welcome to MindEase, a sanctuary for mental health and well-being. We
            understand that seeking support for your mental health is a deeply personal
            journey, and we’re here to guide you through it with empathy, compassion, and
            transparency</p><br>
          <p>At MindEase, we believe in a holistic approach to mental health. Our team of
            experienced professionals combines evidence-based practices with a genuine
            understanding of individual needs. We recognize that every person’s path to
            healing is unique, and we tailor our support to meet you where you are.</p>
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
            <p class="text-white mb-4 pb-2">
              <b>Personalized Care:</b> We don’t believe in a one-size-fits-all approach. Our
              dedicated team takes the time to listen, understand, and create a customized
              plan that addresses your specific concerns and goals.<br><br>
              <b>Community and Connection:</b> We know that feeling heard and understood is
              crucial for healing. That’s why we foster a supportive community where you can
              share, learn, and grow alongside others who are on similar journeys.<br><br>
              <b>Innovative Therapeutic Techniques:</b> We’re committed to staying at the
              forefront of mental health care. Our team continuously explores and integrates
              innovative techniques and therapies to provide you with the most effective
              support.

            </p>
            <div class="row g-4">
              <div class="col">
                <div class="d-flex align-items-center">
                  <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                    <i class="fa fa-user-md text-primary"></i>
                  </div>
                  <div class="ms-4">
                    <p class="text-white mb-2">Mission</p>
                    <h5 class="text-white mb-0">Facilitate global access to mental health support by fostering connections
                      between therapists and patients worldwide.</h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-4 mt-2">
              <div class="col">
                <div class="d-flex align-items-center">
                  <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                    <i class="fa fa-check text-primary"></i>
                  </div>
                  <div class="ms-4">
                    <p class="text-white mb-2">Vision</p>
                    <h5 class="text-white mb-0">Build a globally accessible 24/7 mental health network, connecting individuals
                      with therapists globally for immediate support and well-being.</h5>
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