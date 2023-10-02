<template>
  <!-- Login start -->
  <div class="container">
    <div class="screen">
      <div class="screen__content">
        <form class="login">
          <img src="../../assets/img/logo.jpeg" alt="Your Logo" class="logo">
          <div class="login__field">
            <input type="text" class="login__input" placeholder="User name / Email">
          </div>
          <div class="login__field">
            <input type="password" class="login__input" placeholder="Password">
          </div>
          <button class="button login__submit">
            <span class="button__text">Log In Now</span>
          </button>
        </form>
      </div>
      <div class="screen__background">
        <span class="screen__background__shape screen__background__shape4"></span>
        <span class="screen__background__shape screen__background__shape3"></span>
        <span class="screen__background__shape screen__background__shape2"></span>
        <span class="screen__background__shape screen__background__shape1"></span>
      </div>
    </div>
  </div>
  <!-- Login end -->
</template>

<script>

export default {
  name: "LoginComponent"
}
</script>

<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
}

body {
  background: linear-gradient(90deg, #05A3A4, #DE6520);
  overflow-y: hidden;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.screen {
  background: linear-gradient(90deg, #05A3A4, #006373);
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px #006373;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #FFF;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #05A3A4;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #05A3A4, #006373);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #05A3A4;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 320px;
  padding: 156px 30px 30px;
}

.login__field {
  padding: 20px 0;
  position: relative;
}

.login__input {
  border: none;
  border-bottom: 2px solid #D1D1D4;
  background: none;
  padding: 10px 10px 10px 24px;
  font-weight: 700;
  width: 75%;
  transition: .2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #05A3A4;
}

.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #D4D3E8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #05A3A4;
  box-shadow: 0px 2px 2px #05A3A4;
  cursor: pointer;
  transition: .2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #05A3A4;
  outline: none;
}

.logo {
  max-width: 100%;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .screen {
    height: auto;
    padding: 20px;
  }
}


</style>