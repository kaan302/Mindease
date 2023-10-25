<template>
  <div class="text-center mx-auto mb-1 mt-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
    <p class="d-inline-block border rounded-pill py-1 px-4">Your Consults</p>
  </div>

  <div class="container">

    <!-- First Row -->
    <div class="row border-bottom">
      <div class="col">
        <h3 class="title">Attending consultancies</h3>
      </div>
    </div>

    <!-- Second Row -->
    <div class="row">
      <!-- First Column -->
      <div class="col-md-4">
        <ConsultantComponent name="Alice Smith" date="October 5, 2023" time="10:30 AM - 11:30 AM" consult="Mental Health" past="past" current="current"/>
      </div>
    </div>

    <!-- First Row -->
    <div class="row border-bottom">
      <div class="col">
        <h3 class="title">Past consultancies</h3>
      </div>
    </div>

    <!-- Second Row -->
    <div class="row">
      <!-- First Column -->
      <div class="col-md-4">
        <ConsultantComponent name="Bob Johnson" date="October 6, 2023" time="2:00 PM - 3:00 PM" consult="Anxiety Issues"  past="past"/>
      </div>
      <!-- Second Column -->
      <div class="col-md-4">
        <ConsultantComponent name="Emma Davis" date="October 7, 2023" time="11:00 AM - 12:00 PM" consult="Stress Management"  past="past"/>
      </div>
      <!-- Third Column -->
      <div class="col-md-4">
        <ConsultantComponent name="Michael Wilson" date="October 8, 2023" time="3:30 PM - 4:30 PM" consult="Depression" past="past"/>
      </div>

    </div>

  </div>
</template>

<script>
import ConsultantComponent from "@/components/Consults/ConsultComponent";

export default {
  name: "TherapistConsults",
  components: {
    ConsultantComponent
  },
}
</script>

<style scoped>

</style>