<template>
  <div class="content">

    <div class="doctor-info">

      <div class="image">
        <img src="../../assets/img/team-1.jpg">
      </div>

      <table class="table table-bordered">
        <thead>
        <tr>
          <th colspan="4">Consultant information</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Firstname</th>
          <td>{{ doctor.doctorFirstName }}</td>
          <th scope="row">Placeholder</th>
          <td>Placeholder</td>
        </tr>
        <tr>
          <th scope="row">Lastname</th>
          <td>{{ doctor.doctorLastName }}</td>
          <th scope="row">Placeholder</th>
          <td>Placeholder</td>
        </tr>
        <tr>
          <th scope="row">Language</th>
          <td>{{ doctor.doctorLanguage }}</td>
          <th scope="row">Placeholder</th>
          <td>Placeholder</td>
        </tr>
        <tr>
          <th scope="row">Studied at</th>
          <td>University of Amsterdam</td>
          <th scope="row">Placeholder</th>
          <td>Placeholder</td>
        </tr>
        <tr>
          <th scope="row">Working since</th>
          <td>2012</td>
        </tr>
        <tr>
          <th scope="row">Rate</th>
          <td>€45/h</td>
        </tr>
        </tbody>
      </table>


    </div>


    <h2>Contact information</h2>
    <div class="doctor-contact">
      <DoctorContact
          class="doctor-contact-item"
          title="Address"
          sub-title="123 Street Amsterdam"
          icon="fas fa-map-marker-alt"/>
      <DoctorContact
          class="doctor-contact-item"
          title="Call"
          sub-title="+012 345 6789"
          icon="fas fa-phone"/>
      <DoctorContact
          class="doctor-contact-item"
          title="Mail"
          sub-title="info@example.com"
          icon="fas fa-envelope"/>
    </div>

    <QuestionForm />

  </div>
</template>

<script>
import DoctorContact from "@/components/Appointment/DoctorContact";
import QuestionForm from "@/components/Appointment/QuestionForm";

export default {
  name: "AppointmentComponent",
  props: {
    doctor: Object,
  },
  components: {
    DoctorContact,
    QuestionForm
  },
};
</script>

<style scoped>

.content {
  width: 90%;
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
}

table{
  border-color: white;
  flex: 1;
  margin-left: 1%;
}

thead th{
  font-size: 28px;
  background: #05A3A4;
  color: white;
}

tbody th, tbody td{
  font-size: 24px;
  border-bottom: white 2px solid;
}

.image img {
  width: 100%; /* Set the image width to 100% of the container */
  height: 100%; /* Set the image height to 100% of the container */;
}

.doctor-info{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.doctor-contact {
  display: flex;
  justify-content: space-between; /* Add space between items */
  width: 100%;
  margin: 5% auto;
}

.doctor-contact-item {
  flex: 1;
  margin-right: 5%;
  margin-left: 5%
}

h2{
  text-align: center;
  margin-top: 5%;
  font-size: 34px;
}

</style>
