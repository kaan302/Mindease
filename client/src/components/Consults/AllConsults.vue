<template>
  <!-- Service Start -->
  <div class="text-center mx-auto mb-1 mt-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
    <p class="d-inline-block border rounded-pill py-1 px-4">Consults</p>
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
        <ConsultantComponent name="Dr. Bibber" date="September 30, 2023" time="2:00 PM - 3:00 PM" consult="Heart-related issues" past="past" current="current"/>
      </div>
    </div>

    <!-- First Row -->
    <div class="row border-bottom">
      <div class="col">
        <h3 class="title">Upcoming consultancies</h3>
      </div>
    </div>

    <!-- Second Row -->
    <div class="row">
      <!-- First Column -->
      <div class="col-md-4">
        <ConsultantComponent name="Dr. Smith" date="September 28, 2023" time="2:00 PM - 3:00 PM" consult="Heart-related issues" />
      </div>
      <!-- Second Column -->
      <div class="col-md-4">
        <ConsultantComponent name="Dr. Johnson" date="October 5, 2023" time="10:30 AM - 11:30 AM" consult="Mental Health" />
      </div>
    </div>

    <!-- First Row -->
    <div class="row border-bottom">
      <div class="col">
        <h3 class="title">Past Consultancies</h3>
      </div>
    </div>

    <!-- Second Row -->
    <div class="row">
      <!-- First Column -->
      <div class="col-md-4">
        <ConsultantComponent name="Dr. Patel" date="October 12, 2023" time="3:30 PM - 4:30 PM" consult="Diabetes Management" past="past"/>
      </div>
      <!-- Second Column -->
      <div class="col-md-4">
        <ConsultantComponent name="Dr. Lee" date="October 18, 2023" time="11:00 AM - 12:00 PM" consult="Physical Therapy"  past="past"/>
      </div>
      <!-- Third Column -->
      <div class="col-md-4">
        <ConsultantComponent name="Dr. Garcia" date="October 25, 2023" time="1:30 PM - 2:30 PM" consult="Nutrition Counseling"  past="past"/>
      </div>
    </div>

  </div>
</template>

<script>
import ConsultantComponent from "@/components/Consults/ConsultComponent";

export default {
  name: "AllClient",
  components: {
    ConsultantComponent
  },
  data() {
    return {
      dummyConsults: [
        {
          name: 'John Doe',
          description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          link: '#/doctor-profile',
        },
        {
          name: 'Jane Smith',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis bibendum est.',
          link: '#',
        },
        {
          name: 'Alice Johnson',
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          link: '#',
        },
        {
          name: 'John Doe',
          description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
          link: '#',
        },
        {
          name: 'Jane Smith',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis bibendum est.',
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
  }
}
</script>

<style scoped>
.rounded-pill{
  color: #006373;
}
</style>