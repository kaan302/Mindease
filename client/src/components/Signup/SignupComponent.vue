<template>
  <div class="container mt-5">
    <h2 class="mb-4">Signup</h2>
    <form @submit.prevent="submitForm">
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="name" class="form-label">First name</label>
          <input type="text" class="form-control" id="name" v-model="formData.firstname" required>
        </div>
        <div class="col-md-6">
          <label for="name" class="form-label">Last name</label>
          <input type="text" class="form-control" id="name" v-model="formData.lastname" required>
        </div>
      </div>
      <div class="row mb-3">
<!--        <div class="col-md-6">-->
<!--          <label for="password" class="form-label">Password</label>-->
<!--          <input type="password" class="form-control" id="password" v-model="formData.password" required>-->
<!--        </div>-->
<!--        <div class="col-md-6">-->
<!--          <label for="confirmPassword" class="form-label">Confirm Password</label>-->
<!--          <input type="password" class="form-control" id="confirmPassword" v-model="formData.confirmPassword" required>-->
<!--        </div>-->
        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required>
        </div>
        <div class="col-md-6">
          <label for="role" class="form-label">Role</label>
          <select class="form-select" id="role" v-model="formData.role" required>
            <option value="patient">Patient</option>
            <option value="therapist">Therapist</option>
          </select>
        </div>
      </div>
<!--      <div class="row mb-3">-->
<!--        <div class="col-md-6">-->
<!--          <label for="address" class="form-label">Address</label>-->
<!--          <input type="text" class="form-control" id="address" v-model="formData.address" required>-->
<!--        </div>-->

<!--      </div>-->
<!--      <div class="row mb-3">-->
<!--        <div class="col-md-6">-->
<!--          <label for="dob" class="form-label">Date of Birth</label>-->
<!--          <input type="date" class="form-control" id="dob" v-model="formData.dob" required>-->
<!--        </div>-->
<!--        <div class="col-md-6">-->
<!--          <label for="phone" class="form-label">Phone Number</label>-->
<!--          <input type="tel" class="form-control" id="phone" v-model="formData.phone" required>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row mb-3">-->
<!--        <div class="col-md-6">-->
<!--          <label for="gender" class="form-label">Gender</label>-->
<!--          <select class="form-select" id="gender" v-model="formData.gender" required>-->
<!--            <option value="male">Male</option>-->
<!--            <option value="female">Female</option>-->
<!--            <option value="other">Other</option>-->
<!--          </select>-->
<!--        </div>-->
<!--        <div class="col-md-6">-->
<!--          <label for="occupation" class="form-label">Occupation</label>-->
<!--          <input type="text" class="form-control" id="occupation" v-model="formData.occupation" required>-->
<!--        </div>-->
<!--      </div>-->
      <div class="row">

        <div class="col-md-6">
          <br />
          <button type="submit" class="btn btn-primary signup">Sign up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignupComponent",
  data() {
    return {
      formData: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        address: "",
        dob: "",
        gender: "",
        occupation: "",
        role: ""
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log("Form submitted:", this.formData);
      if (this.formData.role === "patient") {
        this.$router.push("/patient");
      } else {
        this.$router.push("/therapist");
      }
      this.sendForm(); // Call the sendForm method to submit the form to Formspree
    },
    async sendForm() {
      const response = await fetch('https://formspree.io/f/xaygvgpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      });

      if (response.ok) {
        // Handle success
        console.log('Form submitted successfully!');
      } else {
        // Handle error
        console.error('Failed to submit form');
      }
    },
  },
};
</script>

<style scoped>
.signup {
  background-color: #5986CE;
}

.signup:hover {
  background-color: white;
  color: black;
}
</style>
