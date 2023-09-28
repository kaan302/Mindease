<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
export default {
  name: 'App',
  components: { NavBar, Footer }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

html, body {
  margin: 0;
  padding: 0;
}
</style>
