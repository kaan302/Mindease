<template>
  <div class="content">

    <div class="doctor-info">

      <div class="image">
        <img src="../../assets/img/team-1.jpg" alt="X">
      </div>

      <div class="col-md-8 info">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Full Name</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                John Doe
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                john@doe.nl
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Phone</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                (030) 816-9029
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Mobile</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                (030) 380-4539
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Address</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Amsterdam, Amsterdam, NL
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Language</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Dutch
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Education</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                University of Amsterdam
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Language</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Dutch
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Years of experience</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                10
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Description</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Dutch
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="appointment-section">
      <button @click="openModal">Make appointment</button>
      <AppointmentModel :showModal="isModalOpen" @closeModal="closeModal"/>
    </div>

    <h2>Contact information</h2>

    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-4">
          <Adress></Adress>
          <CallUs></CallUs>
          <MailUs></MailUs>
          <ContactForm></ContactForm>
          <google-maps></google-maps>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppointmentModel from "@/components/Appointment/AppointmentModel";
import Adress from "@/components/Contact/Adress";
import CallUs from "@/components/Contact/CallUs";
import MailUs from "@/components/Contact/MailUs";
import googleMaps from "@/components/Contact/GoogleMaps";
import ContactForm from "@/components/Contact/ContactForm";

export default {
  name: "AppointmentComponent",
  props: {
    doctor: Object,
  },
  components: {
    Adress,
    AppointmentModel,
    CallUs,
    MailUs,
    ContactForm,
    googleMaps
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
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

.image img {
  width: 100%; /* Set the image width to 100% of the container */
  height: 100%; /* Set the image height to 100% of the container */;
}

.doctor-info {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.info {
  margin-left: 2%;
  margin-top: 1%;
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

h2 {
  text-align: center;
  margin-top: 5%;
  font-size: 34px;
  font-weight: bold;
}

.appointment-section {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.appointment-section button {
  font-size: 32px;
  padding: 10px 20px;
  background-color: #E8891D;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 5%;
}

.appointment-section button:hover {
  background-color: #05A3A4;
}

</style>
