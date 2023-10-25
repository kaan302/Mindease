<template>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-4">
        <div class="service-item bg-light rounded h-100 p-5">
          <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
               style="width: 65px; height: 65px;">
            <i class="fa fa-heartbeat text-primary fs-4"></i>
          </div>
          <h4 class="mb-3">{{ name }}</h4>
          <p class="mb-2"><strong>Date:</strong> {{ date }}</p>
          <p class="mb-2"><strong>Time:</strong> {{ time }}</p>
          <p class="mb-4"><strong>Consulting for:</strong> {{ consult }}</p>
          <button v-if="!past" class="custom-button">Join Session</button>
          <button v-if="current" class="custom-button-two">Cancel Session</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultantComponent",
  props: {
    name: String,
    date: String,
    time: String,
    consult: String,
    past: Boolean,
    current: Boolean
  }

}
</script>

<style scoped>
.fa-heartbeat:before {
  color: #E8891D;
}

.custom-button{
  color: black;
  background-color: lawngreen;
  padding: 3%;
  border-radius: 20px;
  transition: 0.5s;
}

.custom-button:hover{
  background-color: #5986CE;
  color: white;
}

.custom-button-two{
  color: red;
  background-color: transparent;
  border: 2px solid red;
  padding: 3%;
  border-radius: 20px;
  transition: 0.5s;
}

.custom-button-two:hover{
  color: white;
  background-color: red;
}
</style>