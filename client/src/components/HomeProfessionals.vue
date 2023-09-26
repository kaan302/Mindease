<template>
  <!-- Header Start -->
  <div class="container-fluid header bg-primary p-0 mb-5">
    <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
      <div class="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
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

            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div class="owl-carousel header-carousel">
                <div class="owl-carousel-item position-relative">
                  <swiper
                      :slides-per-view="1"
                      :space-between="50"
                      @swiper="onSwiper"
                      @slideChange="onSlideChange"
                  >
                    <swiper-slide><img src="../assets/img/carousel-1.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/img/carousel-2.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/img/carousel-3.jpg" alt=""></swiper-slide>

                  </swiper>
                </div>
              </div>
            </div>
    </div>
  </div>
  <!-- Header End -->

  <!-- Service Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
        <p class="d-inline-block border rounded-pill py-1 px-4">Most recent consults</p>
        <h1>My Consults</h1>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style="width: 65px; height: 65px;">
              <i class="fa fa-heartbeat text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">John Doe</h4>
            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style="width: 65px; height: 65px;">
              <i class="fa fa-x-ray text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">John Doe</h4>
            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style="width: 65px; height: 65px;">
              <i class="fa fa-brain text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">John Doe</h4>
            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style="width: 65px; height: 65px;">
              <i class="fa fa-wheelchair text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">John Doe</h4>
            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style="width: 65px; height: 65px;">
              <i class="fa fa-tooth text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">John Doe</h4>
            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style="width: 65px; height: 65px;">
              <i class="fa fa-vials text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">John Doe</h4>
            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
            <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item bg-light rounded h-100 p-5">
            <h4 class="mb-3">See all consults</h4>
            <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>All consults</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';

import "swiper/css"

export default {
  name: "HomeProfessionals",
  components: {Swiper, SwiperSlide},
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  data() {
    return {
      headerPhotos: [
        "carousel-1.jpg",
        "carousel-2.jpg",
        "carousel-3.jpg"
      ]
    }
  },
}
</script>

<style scoped>
:root {
  --primary: #0463FA;
  --light: #EFF5FF;
  --dark: #1B2C51;
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

/*** Service ***/
.service-item {
  transition: .5s;
}

.service-item:hover {
  margin-top: -10px;
  box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .08);
}

.service-item .btn {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  background: #FFFFFF;
  border-radius: 40px;
  white-space: nowrap;
  overflow: hidden;
  transition: .5s;
}

.service-item:hover .btn {
  width: 140px;
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