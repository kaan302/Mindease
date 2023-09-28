<template>
  <div class="contact">
    <i :class="icon"></i>
    <h2 class="title">{{ title }}</h2>
    <p class="sub-title">{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "DoctorContact",
  props: {
    title: String,
    subTitle: String,
    icon: String
  },
}
</script>

<style scoped>
  .contact{
    background-color: #E8891D;
    text-align: center;
    border-radius: 20px;
    padding: 2%;
  }

  .sub-title{
    font-size: 18px;
  }

  i{
    font-size: 20px;
    background: white;
    padding: 10%;
    border-radius: 50%;
    color: #006373;
  }
</style>