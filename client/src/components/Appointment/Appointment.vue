<template>
  <div class="content">
    <div class="content-left">
      <h1>{{ doctor.doctorFirstName + " " + doctor.doctorLastName }}</h1>
    </div>
    <div class="content-right">
      <div class="doctor-info">
        <p><b class="title">Profession:</b> Cardiologist</p>
        <p><b class="title">Language:</b> English</p>
        <p><b class="title">Specialties:</b> Cardiology, Internal Medicine</p>
        <p><b class="title">Education:</b> MD, University of Medical School</p>
        <p><b class="title">Locations:</b> New York, Los Angeles</p>
        <p><b class="title">Patients:</b> 120</p>
        <p><b class="title">Years of Experience:</b> 10</p>
        <p><b class="title">Rating:</b> 4.5</p>
        <p><b class="title">Description:</b></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          scelerisque quam sed metus condimentum, eu volutpat urna
          facilisis. Nullam venenatis metus eu ipsum facilisis, ut posuere
          libero lacinia.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppointmentComponent",
  props: {
    doctor: Object,
  },
  components: {},
};
</script>

<style scoped>
.content {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  display: flex;
  height: 94vh;
}

.content-left {
  flex: 1;
  background-color: #006373;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.content-left h1 {
  font-size: 56px;
  color: white;
}

.content-right {
  flex: 1;
  background-color: white;
  border-top: 4px solid #006373;
  border-right: 4px solid #006373;
  border-bottom: 4px solid #006373;
  border-radius: 0 25px 25px 0;
  padding: 20px;
}

.doctor-info {
  font-size: 24px;
  color: #333;
  line-height: 1.5;
}

.doctor-info p {
  margin: 10px 0;
}

.title {
  font-weight: bold;
  margin-right: 10px;
}

</style>
