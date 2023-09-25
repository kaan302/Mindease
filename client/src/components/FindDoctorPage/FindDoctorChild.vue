<template>
  <div>
    <h1>{{ selectedProfession }}</h1>
  </div>
</template>

<script>
export default {
  name: "FindDoctorChild",
  props: {
    selectedProfession: String,
  },
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
</style>