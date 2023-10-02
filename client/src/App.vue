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
  computed: {
    isLandingPage() {
      return this.$route.toString() === 'landing-page';
    }
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

html, body {
  margin: 0;
  padding: 0;
}
</style>
