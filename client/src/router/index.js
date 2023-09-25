import {createRouter, createWebHashHistory} from "vue-router";
import HomeComponent from "@/components/HomePage/HomeComponent";
import LandingComponent from "@/components/LandingPage/LandingComponent";
<<<<<<< HEAD
import HomeProfessionals from "@/components/HomeProfessionals";
=======
import FindDoctor from "@/components/FindDoctorPage/FindDoctor";
>>>>>>> 618deeea5556502ad297c80435da9e66c7adbe22

const routes = [
    {
        path: "/",
        component: HomeComponent,
    },
    {
        path: "/landing-page",
        component: LandingComponent,
    },
    {
<<<<<<< HEAD
        path: "/home-professionals",
        component: HomeProfessionals,
=======
        path: "/find-doctor",
        component: FindDoctor,
        props: true
>>>>>>> 618deeea5556502ad297c80435da9e66c7adbe22
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})