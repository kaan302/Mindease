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
  background-color: #05A3A4;
  border: solid 2px #006373;
  border-radius: 12px;
  font-size: 48px;
  width: 15%;
  transition: background-color 0.5s, color 0.5s, border 0.5s;
}

.custom-button:hover {
  background-color: white;
  color: black;
  border: solid 2px #006373;
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
