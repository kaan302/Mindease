<template>

  <!-- Signing up Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 d-flex flex-column align-items-center justify-content-center">
          <h2 class="text-center mb-xxl-5">Why Sign Up?</h2>
          <p class="text-left">
            ✨ <span style="color: #5986CE; font-weight: bold">Personalized Care:</span> Our experts understand that
            every individual is unique. We craft personalized health plans tailored to your specific needs.<br>
            ✨ <span style="color: #5986CE; font-weight: bold">Expert Guidance: </span>Access renowned healthcare
            professionals who provide evidence-based advice, empowering you to make informed decisions.<br>
            ✨ <span style="color: #5986CE; font-weight: bold">Convenient Access: </span>Get expert consultations from
            the comfort of your home. No need to travel; your health support is just a click away.<br>
            ✨ <span style="color: #5986CE; font-weight: bold">Supportive Community: </span>Join a vibrant community of
            like-minded individuals, sharing experiences and fostering a sense of belonging and encouragement.<br>
            ✨ <span style="color: #5986CE; font-weight: bold">Holistic Approach: </span>We focus not only on treating
            ailments but also on promoting overall well-being, ensuring you lead a fulfilling and healthy life.<br>
          </p>
          <button class="btn btn-primary btn-lg rounded-pill signup" @click="goToSignUp">Sign Up Now</button>
        </div>
        <div class="col-lg-6">
          <img src="../../assets/img/join-us.jpg" alt="Feature Image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
  <!-- Signing up End -->
  <!-- About Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div class="d-flex flex-column">
            <img class="img-fluid rounded w-75 align-self-end" src="../../assets/img/about-first.png" alt="">
            <img class="img-fluid rounded w-50 bg-white pt-3 pe-3" src="../../assets/img/therapist-first.png" alt=""
                 style="margin-top: -25%;">
          </div>
        </div>
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h1 class="mb-4">Why You Should Trust Us?<br> Get To Know Us!</h1>
          <p>Welcome to a place where expertise meets compassion, and where your well-being is our top priority. At our
            consulting service, we understand that seeking help and guidance is a significant step, and we're here to
            support you every step of the way.<br><br>

            <span style="font-weight: bold; color: #DE6520">Expert Guidance:</span> Our team comprises highly skilled
            and experienced consultants who are experts in their respective fields. Whether you're dealing with personal
            challenges, professional dilemmas, or seeking self-improvement, our consultants possess the knowledge and
            insight to guide you effectively.<br><br>

            <span style="font-weight: bold; color: #DE6520">Compassionate Approach:</span> Beyond expertise, what sets
            us apart is our genuine care for your well-being. We approach every session with empathy, providing a safe
            and non-judgmental space where you can express yourself freely. Our compassionate consultants are dedicated
            to helping you navigate challenges, find clarity, and achieve your goals.</p>
          <p><i class="far fa-check-circle text-success me-3"></i>Quality health care</p>
          <p><i class="far fa-check-circle text-success me-3"></i>Only Qualified Therapists</p>
          <p><i class="far fa-check-circle text-success me-3"></i>Medical Research Professionals</p>

        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

  <!-- Service Start -->
  <div class="py-5 services">
    <div class="container">
      <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
        <p class="d-inline-block border rounded-pill py-1 px-4 section-title">Services</p>
        <h1 class="section-title">Health Care Solutions</h1>
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

  <!-- Signing up Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 d-flex flex-column align-items-center justify-content-center">
          <h2 class="text-center mb-xxl-5">Why Sign Up?</h2>
          <p class="text-center">
            ✨ <span style="color: #5986CE; font-weight: bold">Personalized Care:</span> Our experts understand that
            every individual is unique. We craft personalized health plans tailored to your specific needs.<br>
            ✨ <span style="color: #5986CE; font-weight: bold">Expert Guidance: </span>Access renowned healthcare
            professionals who provide evidence-based advice, empowering you to make informed decisions.<br>
            ✨ <span style="color: #5986CE; font-weight: bold">Convenient Access: </span>Get expert consultations from
            the comfort of your home. No need to travel; your health support is just a click away.<br>
            ✨ <span style="color: #5986CE; font-weight: bold">Supportive Community: </span>Join a vibrant community of
            like-minded individuals, sharing experiences and fostering a sense of belonging and encouragement.<br>
            ✨ <span style="color: #5986CE; font-weight: bold">Holistic Approach: </span>We focus not only on treating
            ailments but also on promoting overall well-being, ensuring you lead a fulfilling and healthy life.<br>
          </p>
          <button class="btn btn-primary btn-lg rounded-pill signup" @click="goToSignUp">Sign Up Now</button>
        </div>
        <div class="col-lg-6">
          <img src="../../assets/img/join-us.jpg" alt="Feature Image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
  <!-- Signing up End -->

  <div class="text-center mx-auto wow fadeInUp">
    <p class="d-inline-block border rounded-pill py-1 px-4">How does it work?</p>
  </div>

  <div class="container mt-5">
    <!-- First Row -->
    <div class="row mb-4">
      <!-- First Column -->
      <div class="col-md-6">
        <h2 class="title">1. Browse Available Therapists</h2>
        <h4 class="subtitle">Once logged in, browse the list of available therapists. You can filter therapists based on specialties, availability, and other criteria.</h4>
      </div>
      <!-- Second Column -->
      <div class="col-md-6">
        <h2 class="title">2. View Therapist Profiles</h2>
        <h4 class="subtitle">Click on a therapist's profile to view their credentials, specialties, and available time slots</h4>
      </div>
    </div>

    <!-- Second Row -->
    <div class="row">
      <!-- First Column -->
      <div class="col-md-6">
        <h2 class="title">3. Select a Suitable Time</h2>
        <h4 class="subtitle">Choose a date and time that suits your schedule from the therapist's available slots.</h4>
      </div>
      <!-- Second Column -->
      <div class="col-md-6">
        <h2 class="title">4. Confirm the Session</h2>
        <h4 class="subtitle">Confirm the selected date and time for your consultancy session.</h4>
      </div>
    </div>
  </div>


  <!-- Testimonial Start -->
  <div class="py-5 testimonial">
    <div class="container">
      <div class="text-center mx-auto wow fadeInUp">
        <p class="d-inline-block border rounded-pill py-1 px-4">Testimonial</p>
        <h1>What Say Our Patients!</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="testimonial-item text-center">
            <img class="testimonial-image" src="../../assets/img/testimonial-1.jpg" alt="Patient Image">
            <div class="testimonial-content">
              <p>I was struggling with anxiety for years, and finding Mindease was a turning point in my life. The consultation was personalized and incredibly insightful. The therapist not only listened but provided practical strategies that genuinely helped. I can't thank Mindease enough for the positive impact it has had on my mental well-being</p>
              <h5 class="mb-1">Eleanor Bennett</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-item text-center">
            <img class="testimonial-image" src="../../assets/img/testimonial-2.jpg" alt="Patient Image">
            <div class="testimonial-content">
              <p>Dealing with depression was overwhelming, but Mindease made the process of seeking help so much easier. The therapist I consulted with was empathetic and understanding. They helped me identify the root causes of my feelings and guided me towards a healthier mindset. I am grateful for the support I received.</p>
              <h5 class="mb-1">Nathan Reed</h5>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial-item text-center">
            <img class="testimonial-image" src="../../assets/img/testimonial-3.jpg" alt="Patient Image">
            <div class="testimonial-content">
              <p>Mindease provided me with a safe space to discuss my concerns about relationships and self-esteem. The consultant was not just a professional but a compassionate listener. Through their guidance, I learned to navigate my emotions and communicate better with my loved ones.</p>
              <h5 class="mb-1">Lila Rodriguez</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Testimonial End -->

</template>

<script>


import "swiper/css"

export default {
  name: "HomePatient",
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

.testimonial-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #DE6520;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 18px;
  color: #666;
}
</style>