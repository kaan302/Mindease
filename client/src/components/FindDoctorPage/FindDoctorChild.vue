<template>

  <h1>{{ selectedProfession }}</h1>
  <div>
    <ul>
      <li v-for="doctor in doctors" :key="doctor.doctorId">
        {{ doctor.doctorFirstName }} {{ doctor.doctorLastName }}
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "FindDoctorChild",
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