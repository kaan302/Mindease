<template>
  <button class="custom-button btn btn-primary">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "LandingButton"
}
</script>

<style scoped>
.custom-button {
  padding: 10px 20px;
  color: white;
  background-color: #DE6520;
  border: solid 2px #DE6520;
  border-radius: 12px;
  font-size: 48px;
  width: 15%; /* Default button width set to 10% of the container */
  transition: background-color 0.5s, color 0.5s, border 0.5s;
}

.custom-button:hover {
  background-color: white;
  color: black;
  border: solid 2px #DE6520;
}

@media (max-width: 884px) {
  .custom-button {
    font-size: 30px;
  }
}

@media (min-width: 1245px) {
  .custom-button {
    font-size: 30px;
  }
}


@media (max-width: 1412px) {
  .custom-button {
    width: 70%;
  }
}

@media (max-width: 1645px) {
  .custom-button{
    width: 40%;
  }
}

@media (max-width: 2100px) {
  .custom-button{
    width: 40%;
  }
}


</style>
