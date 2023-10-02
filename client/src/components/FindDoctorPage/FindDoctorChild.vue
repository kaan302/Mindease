<template>

  <div class="container">
    <h1 class="text-center rounded-pill p-2 mb-4">{{ selectedProfession }}</h1>
    <div class="row">
      <div v-for="doctor in doctors" :key="doctor.doctorId" class="col-lg-3 col-md-4 col-sm-6 mb-4">
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
  padding: 5px;
  border-radius: 12px;
  margin-left: auto;
  margin-right: auto;
  color: black;
  border: 2px solid #006373;
}

.doctor-detail {
  align-items: center;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-radius: 12px;

}


.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the circular area */
}

</style>