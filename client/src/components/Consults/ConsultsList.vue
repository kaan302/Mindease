<template>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-4">
        <div v-for="(consult, index) in consults" :key="index" class="col-lg-4 col-md-6 wow fadeInUp" :data-wow-delay="'0.' + (index % 3)">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style="width: 65px; height: 65px;">
              <i class="fa fa-heartbeat text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">{{ consult.name }}</h4>
            <p class="mb-4">{{ consult.description }}</p>
            <a class="btn" :href="consult.link"><i class="fa fa-plus text-primary me-3"></i>Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultsList",
  props: {
    consults: Array,
  }
}
</script>

<style scoped>
.fa-heartbeat:before {
  color: #05A3A4;
}
.fa-plus:before {
  color: #05A3A4;
}
</style>