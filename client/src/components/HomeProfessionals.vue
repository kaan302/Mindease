<template>
  <!-- Header Start -->
  <div class="container-fluid header bg-primary p-0 mb-5">
    <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
      <div class="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
        <h1 class="display-4 text-white mb-5">Welcome John Doe</h1>
        <div class="row g-4">
          <div class="col-sm-4">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">13</h2>
              <p class="text-light mb-0">Consulted patients</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">4.5</h2>
              <p class="text-light mb-0">Docter rating</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="border-start border-light ps-4">
              <h2 class="text-white mb-1" data-toggle="counter-up">2020</h2>
              <p class="text-light mb-0">Started since</p>
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

  <!-- Profile Start -->
  <router-link to="/doctor-profile" class="profile-link">
  <div class="container-xxl py-5">
    <div class="container text-center">
      <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
        <p class="d-inline-block border rounded-pill py-1 px-4">Profile</p>
      </div>
      <div class="row g-4 justify-content-center">
        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="team-item position-relative rounded overflow-hidden">
            <div class="overflow-hidden">
              <img class="img-fluid" src="../assets/img/team-1.jpg" alt="">
            </div>
            <div class="team-text bg-light text-center p-4">
              <h5>Dr. John Doe</h5>
              <p class="text-primary">Department</p>
              <div class="team-social text-center">
                <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </router-link>
  <!-- Profile End -->

  <!-- Service Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
        <p class="d-inline-block border rounded-pill py-1 px-4">Most recent consults</p>
      </div>
      <consults-list :consults="dummyConsults"></consults-list>
      <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item bg-light rounded h-100 p-5">
            <h4 class="mb-3">See all consults</h4>
            <router-link to="all-consults" class="btn"><i class="fa fa-plus text-primary me-3"></i>All consults</router-link>
          </div>
        </div>
      </div>
    </div>
  <!-- Service End -->
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import ConsultsList from "@/components/Consults/ConsultsList";

import "swiper/css"

export default {
  name: "HomeProfessionals",
  components: {Swiper, SwiperSlide, ConsultsList},
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
      ],
      dummyConsults: [
        {
          name: 'Alice Johnson',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          link: '#',
        },
        {
          name: 'Alice Johnson',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          link: '#',
        },
        {
          name: 'Alice Johnson',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          link: '#',
        },
      ]
    }
  },
}
</script>

<style scoped>
.flex-lg-row {
  background-color: #05A3A4;
}
.profile-link{
  text-decoration: none;
  color: #05A3A4;
}

p.text-primary{
  color: #05A3A4;
}

.text-primary {
  color: #05A3A4, var(--bs-text-opacity) !important;
}

.fa-plus:before {
  color: #05A3A4;
}

.rounded-pill{
  color: #05A3A4;
}
</style>