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

/*** Footer ***/
.footer .btn.btn-social {
  margin-right: 5px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  border: 1px solid #FFFFFF;
  transition: .3s;
}

.footer .btn.btn-social:hover {
  color: var(--primary);
}

.footer .btn.btn-link {
  display: block;
  margin-bottom: 5px;
  padding: 0;
  text-align: left;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: normal;
  text-transform: capitalize;
  transition: .3s;
}

.footer .btn.btn-link::before {
  position: relative;
  content: "\f105";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-right: 10px;
}

.footer .btn.btn-link:hover {
  color: var(--primary);
  letter-spacing: 1px;
  box-shadow: none;
}

.footer .copyright {
  padding: 25px 0;
  font-size: 15px;
  border-top: 1px solid rgba(256, 256, 256, .1);
}

.footer .copyright a {
  color: var(--light);
}

.footer .copyright a:hover {
  color: var(--primary);
}
</style>