<template>
  <div class="row g-4">
    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
      <div class="bg-light rounded p-5">
        <h1 class="mb-4">Any questions?</h1>
        <p class="mb-4">Get in touch</p>
        <form>
          <div class="row g-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input type="text" class="form-control" id="name" placeholder="Your Name">
                <label for="name">Your Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating">
                <input type="email" class="form-control" id="email" placeholder="Your Email">
                <label for="email">Your Email</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <input type="text" class="form-control" id="subject" placeholder="Subject">
                <label for="subject">Subject</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a message here" id="message"
                          style="height: 100px"></textarea>
                <label for="message">Message</label>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
      <div class="h-100" style="min-height: 400px;">
        <iframe class="rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
      </div>
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

button[type="submit"] {
  background-color: #006373;
  color: #fff;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  font-size: 24px;
  transition: 0.5s;
  border: 2px solid #006373;
}

button[type="submit"]:hover {
  background: white;
  color: black;
  border: 2px solid #006373;
}
</style>
