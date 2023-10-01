<template>
  <div class="col-lg-4">
    <div class="h-100 bg-light rounded d-flex align-items-center p-5">
      <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style="width: 55px; height: 55px;">
        <i class="fa fa-map-marker-alt text-primary"></i>
      </div>
      <div class="ms-4">
        <p class="mb-2">Address</p>
        <h5 class="mb-0">123 Street, Amsterdam, Netherlands</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdressComponent"
}
</script>

<style scoped>
.fa-map-marker-alt:before {
  color: #DE6520;
}
</style>