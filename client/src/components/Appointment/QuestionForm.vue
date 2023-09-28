<template>
  <div class="form">
    <div class="form-header">
      <h2>Any Questions? Please Contact Me!</h2>
    </div>
    <div class="form-content">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <div class="name-email-container">
            <input
                type="text"
                id="name"
                v-model="formData.name"
                placeholder="Your name"
                required
            />
            <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="Your email"
                required
            />
          </div>
        </div>
        <div class="form-group">
          <input
              type="text"
              id="subject"
              v-model="formData.subject"
              placeholder="Subject"
              required
          />
        </div>
        <div class="form-group">
          <textarea
              rows="6"
              id="message"
              v-model="formData.message"
              placeholder="Message"
              required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionForm",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here (e.g., send data to the server)
      console.log("Form submitted with data:", this.formData);
    },
  },
};
</script>

<style scoped>
.form {
  width: 70%;
  background-color: #05A3A4;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 5px;
  margin: 0 auto 5%;
}

.form-header {
  text-align: center;
  margin-bottom: 20px;
  color: #1B2C51;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

.name-email-container {
  display: flex;
  gap: 10px; /* Adjust the gap between name and email inputs */
}

input[type="text"],
input[type="email"],
input[type="text"],
textarea {
  width: 97.8%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 24px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

button[type="submit"] {
  background-color: #006373;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  font-size: 24px;
  transition: 0.5s;
}

button[type="submit"]:hover {
  background: white;
  color: black;
  border: 2px solid #006373;
}
</style>
