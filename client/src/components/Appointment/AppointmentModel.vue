<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">

      <button class="close-button" @click="closeModal">&times;</button>

      <div class="circle-container">
        <div class="circle">
          <img src="../../assets/img/team-1.jpg" alt=""/>
        </div>
      </div>

      <form>
        <h1 class="display-6 label-header">Name</h1>
        <hr class="my-2">
        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Firstname</label>
            <input type="text" class="form-control" id="firstname" value="John">
          </div>
          <div class="col-md-6">
            <label class="form-label">Lastname</label>
            <input type="text" class="form-control" id="lastname" value="Doe">
          </div>
        </div>
        <h1 class="display-6 label-header">Contact</h1>
        <hr class="my-2">
        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" id="email" value="example@mail.com">
          </div>
          <div class="col-md-6">
            <label class="form-label">Phone number</label>
            <input type="text" class="form-control" id="phonenumber" value="+012 3456789">
          </div>
        </div>
        <h1 class="display-6 label-header">Date</h1>
        <hr class="my-2">
        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label">Date</label>
            <Flatpickr v-model="selectedDate" class="form-control" :config="datePickerConfig"></Flatpickr>
          </div>

          <div class="col-md-6">
            <label class="form-label">Time</label>
            <Flatpickr v-model="selectedTime" class="form-control" :config="timePickerConfig"></Flatpickr>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <button type="submit" class="btn btn-primary" style="background-color: #05A3A4;">Schedule</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
import Flatpickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: "AppointmentModel",
  components: {
    Flatpickr,
  },
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      selectedDate: null,
      selectedTime: null,
      datePickerConfig: {
        enableTime: false, // Set to true if you want to enable time selection
        dateFormat: 'Y-m-d', // Customize the date format according to your needs
      },
      timePickerConfig: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true, // Set to true for 24-hour format
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('closeModal'); // Emits a custom event to notify the parent component to close the modal
    },
  }
}
</script>

<style scoped>

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.label-header {
  font-size: 26px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: relative;
  width: 200px; /* Adjust the width and height as needed */
  height: 200px; /* Adjust the width and height as needed */
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid gray;
}

.circle img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the image within the circle */
  width: 100%; /* Adjust the width as needed */
  height: 100%; /* Adjust the height as needed */
  object-fit: cover;
}

</style>