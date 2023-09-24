<template>
  <div class="landing">
    <div class="centered-text">
      <h1>Give yourself a break</h1><br>
      <p>Online Therapy</p><br>
      <p>Anywhere.Anytime. Your fee</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "LandingComponent"
}
</script>

<style scoped>
  .landing{
    background-image: url("../../assets/img/landing-background.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .centered-text h1, p {
    margin: 0;
    padding: 0;
    color: white;
  }

  .centered-text h1{
    font-size: 120px;
    font-weight: normal;
  }

  .centered-text p{
    font-size: 48px;
  }

  .centered-text{
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    width: 75%;
    padding-top: 3%;
    padding-bottom: 3%;
  }

</style>