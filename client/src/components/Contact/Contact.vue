<template>
  <!-- Contact Start -->
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
  <!-- Contact End -->
</template>

<script>
import Adress from "@/components/Contact/Adress";
import CallUs from "@/components/Contact/CallUs";
import MailUs from "@/components/Contact/MailUs";
import ContactForm from "@/components/Contact/ContactForm";
import GoogleMaps from "@/components/Contact/GoogleMaps";

export default {
  name: "ContactComponent",
  components: { Adress, CallUs, MailUs, ContactForm, GoogleMaps}
}
</script>

<style scoped>

</style>