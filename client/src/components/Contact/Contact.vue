<template>
  <!-- Contact Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-4">
        <MailUs></MailUs>

        <ContactForm></ContactForm>
      </div>
    </div>
  </div>
  <!-- Contact End -->
</template>

<script>
import MailUs from "@/components/Contact/MailUs";
import ContactForm from "@/components/Contact/ContactForm";

export default {
  name: "ContactComponent",
  components: {  MailUs, ContactForm,}
}
</script>

<style scoped>

</style>