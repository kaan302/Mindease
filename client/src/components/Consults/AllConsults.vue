<template>
  <!-- Service Start -->
  <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
    <p class="d-inline-block border rounded-pill py-1 px-4">All Consults</p>
  </div>

  <consults-list :consults="dummyConsults"></consults-list>
  <!-- Service End -->
</template>

<script>
import ConsultsList from "@/components/Consults/ConsultsList";

export default {
  name: "AllClient",
  components: {
    ConsultsList
  },
  data() {
    return {
      dummyConsults: [
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
</style>