import {createRouter, createWebHashHistory} from "vue-router";
import HomeComponent from "@/components/HomePage/HomeComponent";
import LandingComponent from "@/components/LandingPage/LandingComponent";
import HomeProfessionals from "@/components/HomeProfessionals";
import FindDoctor from "@/components/FindDoctorPage/FindDoctor";
import Appointment from "@/components/Appointment/Appointment";

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
    },
    {
        path: "/appointment",
        name: 'appointment',
        component: Appointment,
        props: (route) => ({ doctor: JSON.parse(route.query.doctor) }),
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})