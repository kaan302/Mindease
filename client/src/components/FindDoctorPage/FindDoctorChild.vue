<template>

  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-4">
        <div class="service-item bg-light rounded h-100 p-5">

          <!-- Centered profile picture at the top -->
          <div class="d-flex justify-content-center align-items-start mb-3">
            <img src="../../assets/img/profilepicture1.jpg" alt="Not found" class="rounded-circle"
                 style="width: 150px; height: 170px;">
          </div>

          <h4 class="mb-3">{{
              selectedTherapists.therapistFirstName + " " + selectedTherapists.therapistLastName + " "
            }} <i class="fas fa-check-circle check"></i>
          </h4>

          <p class="mb-2"><strong>Languages</strong>
            {{ selectedTherapists.therapistLanguage[0] + " & " + selectedTherapists.therapistLanguage[1] }}</p>
          <p class="mb-2"><strong>Rating</strong> 4.8 <i class="fas fa-star text-warning"></i></p>

          <!-- Display specialties with toggle functionality -->
          <p class="mb-4">
            <strong>Specialties: </strong>
            <button class="plus-btn" @click="toggleSpecialties">
              {{ showAllSpecialties ? '-' : '+' }}
            </button>
            <br> {{ displayedSpecialties }}
          </p>

          <p class="mb-2"><strong>Price per session:</strong> ${{ selectedTherapists.therapistFee }} </p>

          <!-- Centered button at the bottom -->
          <button class="book-btn" @click="goToPage">Book Now</button>

        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: "FindDoctorChild",
  components: {},
  props: {
    selectedProfession: String,
    selectedTherapists: Object
  },

  data() {
    return {
      displayedSpecialties: "", // Initially displayed specialty
      additionalSpecialties: ["Depression", "Stressmanagement"], // Additional specialties to display
      showAllSpecialties: false // Flag to track if all specialties should be displayed
    }
  },

  methods: {
    toggleSpecialties() {
      // Toggle the flag to show/hide all specialties
      this.showAllSpecialties = !this.showAllSpecialties;

      // Update displayed specialties based on the flag
      if (this.showAllSpecialties) {
        this.displayedSpecialties = this.additionalSpecialties.join(", ");
      } else {
        this.displayedSpecialties = "";
      }
    },
    goToPage(){
      this.$router.push("/appointment");
    },
  },
}
</script>

<style scoped>

.check {
  color: deepskyblue;
}

.book-btn {
  color: #5986CE;
  background-color: white;
  border: 2px solid #5986CE;
  padding: 3%;
  border-radius: 20px;
  transition: 0.5s;
}

.book-btn:hover {
  background-color: #5986CE;
  color: white;
}

.plus-btn{
  color: #5986CE;
  background-color: white;
  border: 2px solid #5986CE;
  border-radius: 25px;
  transition: 0.5s;
}

.plus-btn:hover {
  background-color: #5986CE;
  color: white;
}

.service-item:hover {
 background-color: #aebdda !important;
}

</style>