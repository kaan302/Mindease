import {createRouter, createWebHashHistory} from "vue-router";
import HomeComponent from "@/components/HomePage/HomeComponent";
import LandingComponent from "@/components/LandingPage/LandingComponent";
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
        path: "/find-doctor",
        component: FindDoctor
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})