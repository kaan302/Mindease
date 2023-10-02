<template>

  <div class="container">
    <h1 class="text-center border border-primary rounded-pill p-2 mb-4">{{ selectedProfession }}</h1>
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

.doctor-button {
  font-size: 18px;
  border-radius: 12px;
  background-color: #E8891D;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.5s;
}

.doctor-button:hover {
  background-color: #05A3A4;
  color: white;
}
</style>