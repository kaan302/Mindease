<template>
  <div class="col-lg-4">
    <div class="h-100 bg-light rounded d-flex align-items-center p-5">
      <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
           style="width: 55px; height: 55px;">
        <i class="fa fa-envelope-open text-primary"></i>
      </div>
      <div class="ms-4">
        <p class="mb-2">Mail Us Now</p>
        <h5 class="mb-0">info@example.com</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MailUs"
}
</script>

<style scoped>
.fa-envelope-open:before {
  color: #006373;
}
</style>