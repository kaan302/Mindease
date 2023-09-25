<template>

  <div>
    <h1>{{ selectedProfession }}</h1>
    <div class="row">
      <div v-for="doctor in doctors" :key="doctor.doctorId" class="column">
        <DoctorDetail :doctor="doctor" class="doctor-detail" />
      </div>
    </div>
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

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust the gap between doctors */
  justify-content: space-between; /* Distribute doctors evenly in rows */
}

.column {
  width: calc(25% - 20px); /* 25% width minus the gap between doctors */

}

/* Adjust layout for smaller screens (e.g., mobile devices) */
@media (max-width: 768px) {
  .column {
    width: calc(50% - 20px); /* Two doctors per row on smaller screens */
  }
}
</style>