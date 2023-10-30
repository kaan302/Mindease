<template>
  <div class="container mt-5">

    <div class="row">
      <div class="col-md-4">
        <div class="image">
          <img src="../../assets/img/team-1.jpg" alt="X" class="img-fluid">
        </div>
      </div>
      <div class="col-md-8">
        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">First name</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                John
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Last name</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Doe
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
                <h6 class="mb-0">Languages and level</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Dutch (Native),
                English (Advanced),
                Mandarin (Professional),
                German (Intermediate),
                French (Basic)
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">About me</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor fringilla sapien, sed blandit
                leo iaculis id. Donec eu magna est. Donec at lobortis felis. Donec interdum lacus eget mollis euismod.
                In vel pharetra leo. Praesent at justo non nibh vulputate rutrum non id leo. Suspendisse quis
                ullamcorper tortor.
              </div>
            </div>
          </div>
        </div>

          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Rating</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  4.5
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Number of patients</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  35
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Appointments scheduled</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  5
                </div>
              </div>
            </div>
          </div>

        <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Speciality</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  Depression,
                  Anxiety,
                  Eating disorders,
                  Coach
                </div>
              </div>
              </div>
          </div>
        </div>

      </div>

      <DatePicker v-model="date"></DatePicker>
    </div>


    <div class="appointment-section row mt-3 d-flex justify-content-center">
      <div class="col-md-12 text-center">
        <button @click="openModal" class="btn btn-primary btn-lg">Make appointment</button>
        <AppointmentModel :showModal="isModalOpen" @closeModal="closeModal"/>
      </div>
    </div>


    <h2>Message me</h2>

    <div class="contact">
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-4">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppointmentModel from "@/components/Appointment/AppointmentModel";
import ContactForm from "@/components/Contact/ContactForm";
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

export default {
  name: "AppointmentComponent",
  props: {
    doctor: Object,
  },
  components: {
    AppointmentModel,
    ContactForm,
    DatePicker
  },
  data() {
    return {
      isModalOpen: false,
      date: new Date(),
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
  background-color: #05A3A4;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.5s;
  margin-top: 5%;
}

.appointment-section button:hover {
  background-color: #006373;
}

@media (max-width: 768px) {
  .image img {
    height: 100%;
  }

  .doctor-info {
    flex-direction: column;
    align-items: center;
  }

  .info {
    margin-top: 2%;
  }

  .appointment-section button {
    font-size: 28px;
  }
}

.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 5%;
}
</style>
