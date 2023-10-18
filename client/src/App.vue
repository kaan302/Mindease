<template>
  <div id="app">
    <NavBar v-if="!['landing-home'].includes($route.name)"></NavBar>
    <router-view></router-view>
    <Footer v-if="!['landing-home'].includes($route.name)"></Footer>
  </div>
</template>

<script>
import NavBar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";

export default {
  name: 'App',
  components: { NavBar, Footer },
  data() {
    return {
      navFoot: false
    }
  },
  watch: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

body, html {
  margin: 0;
  padding: 0;
}
</style>
