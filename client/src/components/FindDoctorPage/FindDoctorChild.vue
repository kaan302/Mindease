<template>

  <h1>{{ selectedProfession }}</h1>
  <div v-for="doctor in doctors" :key="doctor.doctorId">
    <DoctorDetail :doctor="doctor"/>
  </div>

</template>

<script>
import DoctorDetail from "@/components/FindDoctorPage/DoctorDetail";

export default {
  name: "FindDoctorChild",
  components: {
    DoctorDetail
  },
  props: {
    selectedProfession: String,
    doctors: Array
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>