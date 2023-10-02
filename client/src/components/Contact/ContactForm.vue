<template>
  <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
    <div class="bg-light rounded p-5">
      <p class="d-inline-block border rounded-pill py-1 px-4">Contact Us</p>
      <h1 class="mb-4">Contact Form</h1>
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
</template>

<script>
export default {
  name: "ContactForm"
}
</script>

<style scoped>
.btn.btn-primary {
  background-color: #05A3A4;
  border-color: #05A3A4;
}

.rounded-pill{
  color: #DE6520;
}

</style>