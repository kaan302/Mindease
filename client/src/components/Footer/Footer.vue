<template>
  <!-- Footer Start -->
  <div class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="row g-5">
        <!-- First Column -->
        <div class="col-lg-4 col-md-12">
          <h5 class="text-light mb-4">Address</h5>
          <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
          <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
          <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
          <div class="d-flex pt-2">
            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-twitter"></i></a>
            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-youtube"></i></a>
            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <!-- Second Column -->
        <div class="col-lg-4 col-md-12">
          <h5 class="text-light mb-4">Services</h5>
          <div class="services-footer">
            <a>Cardiology</a>
            <br>
            <a>Pulmonary</a>
            <br>
            <a>Neurology</a>
            <br>
            <a>Orthopedics</a>
            <br>
            <a>Laboratory</a>
          </div>
        </div>
        <!-- Third Column -->
        <div class="col-lg-4 col-md-12">
          <h5 class="text-light mb-4">Quick Links</h5>
          <router-link to="about" class="btn btn-link d-block mb-2">About Us</router-link>
          <router-link to="#" class="btn btn-link d-block mb-2">Contact Us</router-link>
          <router-link to="find-doctor" class="btn btn-link d-block">Our Doctors</router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a class="border-bottom" href="#">Mindease</a>, All Right Reserved.
          </div>
          <div class="col-md-6 text-center text-md-end">
            Designed By <a class="border-bottom" href="https://rk-developments.com">R&K Developments</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>


<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
/*** Footer ***/
.footer{
  background-color: #5986CE !important;
}

.footer .btn.btn-social {
  margin-right: 5px;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:  #DE6520;
  border: 1px solid #FFFFFF;
  transition: .3s;
}

.footer .btn.btn-social:hover {
  color: #5986CE;
}

.footer .btn.btn-link {
  display: block;
  margin-bottom: 5px;
  padding: 0;
  text-align: left;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: normal;
  text-transform: capitalize;
  transition: .3s;
}

.footer .btn.btn-link::before {
  position: relative;
  content: "\f105";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  margin-right: 10px;
}

.footer .btn.btn-link:hover {
  color: #DE6520;
  letter-spacing: 1px;
  box-shadow: none;
}

.footer .copyright {
  padding: 25px 0;
  font-size: 15px;
  border-top: 1px solid rgba(256, 256, 256, .1);
}

.footer .copyright a {
  color: white;
}

.footer .copyright a:hover {
  color: #DE6520;
}
</style>