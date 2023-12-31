<template>
  <!-- About Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div class="d-flex flex-column">
            <img class="img-fluid rounded w-75 align-self-end" src="../../assets/img/about-second.png" alt="">
            <img class="img-fluid rounded w-50 bg-white pt-3 pe-3" src="../../assets/img/therapist-second.png" alt=""
                 style="margin-top: -25%;">
          </div>
        </div>
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h1 class="mb-4">Empowering Lives: The Mindease Therapist Experience</h1>
          <p>Being a therapist at Mindease is not just a profession; it's a calling, a commitment to making a genuine difference in the lives of others. As a Mindease therapist, you become a beacon of hope, a steady guide, and a compassionate listener, helping individuals navigate the complex journey of mental and emotional well-being.<br><br>

            <span style="font-weight: bold; color: #DE6520">Compassionate Connection:</span> At Mindease, we understand the power of genuine human connection. As a therapist, you forge deep, empathetic bonds with your clients. You provide them with a safe space to express their thoughts and feelings openly, fostering trust and facilitating healing.<br><br>

            <span style="font-weight: bold; color: #DE6520">Personalized Care:</span> Each individual is unique, and so are their struggles. As a Mindease therapist, you tailor your approach to meet the specific needs of your clients. Your personalized care empowers individuals to confront challenges, explore their emotions, and develop coping mechanisms, leading to transformative outcomes.</p>
          <p><i class="far fa-check-circle text-success me-3"></i>Quality health care</p>
          <p><i class="far fa-check-circle text-success me-3"></i>Only Qualified Therapists</p>
          <p><i class="far fa-check-circle text-success me-3"></i>Medical Research Professionals</p>

        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

  <!-- Signing up Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 d-flex flex-column align-items-center justify-content-center">
          <h2 class="text-center mb-xxl-5">Why Sign Up?</h2>
          <p class="text-end">
            ✨ <span style="color: #DE6520; font-weight: bold">Impact Lives:</span> Your expertise can make a difference. By joining Mindease, you have the opportunity to impact lives directly. Your guidance can empower individuals, providing them with the tools they need to overcome challenges and thrive emotionally.<br>
            ✨ <span style="color: #DE6520; font-weight: bold">Flexible Practice: </span>Mindease offers you the flexibility to practice therapy on your terms. Whether you prefer a structured schedule or the freedom of setting your hours, our platform accommodates your needs. Focus on what you do best – helping others – while we handle the logistics.<br>
            ✨ <span style="color: #DE6520; font-weight: bold"> Reach a Global Audience: </span>Your therapeutic skills know no boundaries. Mindease connects you with individuals from diverse backgrounds and cultures, allowing you to broaden your horizons and gain valuable experience working with a wide range of clients.<br>
          </p>
          <button class="btn btn-primary btn-lg rounded-pill signup" @click="goToSignUp">Signup Now</button>
        </div>
        <div class="col-lg-6">
          <img src="../../assets/img/join-us.jpg" alt="Feature Image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
  <!-- Signing up End -->

  <!-- Service Start -->
  <div class="py-5 services">
    <div class="container">
      <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
        <p class="d-inline-block border rounded-pill py-1 px-4 section-title">Services</p>
        <h1 class="section-title">We focus on</h1>
      </div>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                 style="width: 65px; height: 65px;">
              <i class="fa fa-brain text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">Anxiety Disorders</h4>
            <p class="mb-4">Anxiety disorders are a group of mental health disorders characterized by excessive worry,
              fear, or anxiety. These conditions can interfere significantly with daily activities and may include
              generalized anxiety disorder, panic disorder, social anxiety disorder, and specific phobias. Treatment
              often involves therapy, medication, or a combination of both.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                 style="width: 65px; height: 65px;">
              <i class="fa fa-tint text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">Depression</h4>
            <p class="mb-4">Depression, or major depressive disorder, is a mood disorder that causes persistent feelings
              of sadness, hopelessness, and a lack of interest or pleasure in activities. It can affect how you feel,
              think, and handle daily activities. Depression is a common but serious condition that can be treated
              through therapy, medication, lifestyle changes, and support from loved ones.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                 style="width: 65px; height: 65px;">
              <i class="fa fa-male text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">Stress Management</h4>
            <p class="mb-4">Stress management refers to a variety of techniques and therapies aimed at controlling a
              person's stress levels, especially chronic stress. Techniques may include relaxation exercises,
              mindfulness, time management, and seeking social support. Effective stress management can lead to improved
              overall well-being and mental health.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                 style="width: 65px; height: 65px;">
              <i class="fa fa-heart-broken text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">Relationship Issues</h4>
            <p class="mb-4">Relationship issues encompass challenges or conflicts experienced in romantic relationships,
              friendships, family dynamics, or workplace interactions. These issues can range from communication
              problems and trust issues to conflicts related to intimacy or life changes. Therapy and counseling can
              help individuals and couples navigate these challenges, improve communication, and build healthier
              relationships.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                 style="width: 65px; height: 65px;">
              <i class="fa fa-apple-alt text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">Eating Disorders</h4>
            <p class="mb-4">Eating disorders are serious mental health conditions related to disturbances in eating
              behaviors and negative thoughts about body weight and shape. Common eating disorders include anorexia
              nervosa, bulimia nervosa, and binge-eating disorder. Treatment typically involves therapy, nutritional
              counseling, and medical monitoring to address both the physical and psychological aspects of the
              disorder.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="service-item bg-light rounded h-100 p-5">
            <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                 style="width: 65px; height: 65px;">
              <i class="fa fa-capsules text-primary fs-4"></i>
            </div>
            <h4 class="mb-3">Substance Abuse and Addiction</h4>
            <p class="mb-4">Substance abuse and addiction involve the misuse of drugs or alcohol, leading to negative
              consequences in various aspects of life. Addiction is characterized by a compulsive need for the substance
              despite harmful consequences. Treatment approaches may include therapy, counseling, support groups, and
              sometimes medication-assisted treatment. Overcoming addiction often requires a combination of medical and
              behavioral interventions.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Service End -->

  <!-- Testimonial Start -->
<!--  <div class="container-xxl py-5">-->
<!--    <div class="container">-->
<!--      <div class="text-center mx-auto wow fadeInUp">-->
<!--        <p class="d-inline-block border rounded-pill py-1 px-4 testimonial-title">Testimonials</p>-->
<!--        <h1>What Say Our Colleagues!</h1>-->
<!--      </div>-->
<!--      <div class="row justify-content-center">-->
<!--        <div class="col-md-4">-->
<!--          <div class="testimonial-item text-center">-->
<!--            <img class="testimonial-image" src="../../assets/img/testimonial-1.jpg" alt="Patient Image">-->
<!--            <div class="testimonial-content">-->
<!--              <p>"Transitioning to online therapy has been an incredibly positive experience for both my clients and myself. The flexibility of virtual sessions allows me to accommodate diverse schedules and reach individuals who may have otherwise faced barriers to in-person care. I've witnessed profound breakthroughs as clients open up in the comfort of their own environments. The technology not only facilitates connection but also adds a layer of convenience that enhances the therapeutic process. I'm grateful to witness the resilience and growth of my clients through the powerful medium of online therapy."</p>-->
<!--              <h5 class="mb-1">Eleanor Bennett</h5>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-4">-->
<!--          <div class="testimonial-item text-center">-->
<!--            <img class="testimonial-image" src="../../assets/img/testimonial-2.jpg" alt="Patient Image">-->
<!--            <div class="testimonial-content">-->
<!--              <p>"Embracing online therapy has deepened the therapeutic connection in unexpected ways. The virtual platform breaks down physical barriers, enabling clients to share their thoughts and emotions more freely. The ability to incorporate technology into sessions has also allowed for creative and interactive interventions that enhance the therapeutic experience. Witnessing clients feel empowered to engage with their mental health journey from the comfort of their chosen space has been rewarding. Online therapy has expanded my reach as a therapist, and I've seen the positive impact it has on the lives of those I work with."</p>-->
<!--              <h5 class="mb-1">Nathan Reed</h5>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-4">-->
<!--          <div class="testimonial-item text-center">-->
<!--            <img class="testimonial-image" src="../../assets/img/testimonial-3.jpg" alt="Patient Image">-->
<!--            <div class="testimonial-content">-->
<!--              <p>"As a therapist providing online mental health services, I've seen the transformative power of technology in breaking down traditional constraints to mental health care. The virtual space fosters a sense of security and openness, enabling clients to delve deep into their experiences. The convenience of online sessions promotes consistency in attendance and engagement, contributing to more effective and sustainable therapeutic outcomes. Embracing this digital approach has allowed me to reach individuals from diverse backgrounds, fostering a sense of inclusivity in the therapeutic process. It's truly inspiring to witness the positive changes my clients achieve through the dynamic and accessible nature of online therapy."</p>-->
<!--              <h5 class="mb-1">Juan Rodriguez</h5>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <!-- Testimonial End -->
</template>

<script>

import "swiper/css"

export default {
  name: "HomeProfessionals",
  components: {},
  methods: {
    goToSignUp() {
      this.$router.push("/signup");
    },
  }
}
</script>

<style scoped>

.fa-brain:before {
  color: #F46E0F;
}

.fa-tint:before {
  color: #F46E0F;
}

.fa-male:before {
  color: #F46E0F;
}

.fa-heart-broken:before {
  color: #F46E0F;
}

.fa-apple-alt:before {
  color: #F46E0F;
}

.fa-capsules:before {
  color: #F46E0F;
}

.testimonial-carousel::before, .testimonial-carousel::after {
  width: 0;
}

.services {
  background-color: #F46E0F;
}

.section-title {
  color: white;
}


.signup {
  background-color: #F46E0F;
//border: 2px solid #5986CE;
  border: none;
  color: white;
}

.signup:hover {
  background-color: #5986CE;
}

/*.testimonial-item {*/
/*  width: 400px; !* Adjust the width of the circular testimonial *!*/
/*  height: 400px; !* Adjust the height of the circular testimonial *!*/
/*  border-radius: 50%;*/
/*  background-color: white;*/
/*  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  overflow: hidden;*/
/*}*/



.testimonial-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

/*.testimonial-content {*/
/*  text-align: center;*/
/*  padding: 20px;*/
/*}*/
</style>