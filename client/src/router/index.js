import {createRouter, createWebHashHistory} from "vue-router";
import HomeComponent from "@/components/HomePage/HomeComponent";
import LandingComponent from "@/components/LandingPage/LandingComponent";
import HomeProfessionals from "@/components/HomeProfessionals";
import FindDoctor from "@/components/FindDoctorPage/FindDoctor";

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

        path: "/home-professionals",
        component: HomeProfessionals,
    },
    {
        path: "/find-doctor",
        component: FindDoctor,
        props: true

    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})