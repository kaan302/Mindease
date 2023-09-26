<template>
  <h1>Appointment</h1>
  <p>{{ doctor }}</p>
</template>

<script>

export default {
  name: "AppointmentComponent",
  props: {
    doctor: Object,
  },
  components: {

  },
}
</script>

<style scoped>

</style>