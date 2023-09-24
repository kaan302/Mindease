<template>
  <button class="custom-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "LandingButton"
}
</script>

<style scoped>
  .custom-button{
    padding: 10px 20px;
    color: white;
    border: solid 2px #DE6520;
    border-radius: 12px;
    cursor: pointer;
    margin-bottom: 1%;
    font-size: 24px;
    width: 12%;
    background-color: #DE6520;
    transition: background-color 0.5s, color 0.5s, border 0.5s;
  }

  .custom-button:hover{
    animation: none;
    background-color: white;
    color: black;
    border: solid 2px #DE6520;
  }

</style>