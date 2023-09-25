import {createRouter, createWebHashHistory} from "vue-router";
import HomeComponent from "@/components/HomePage/HomeComponent";
import LandingComponent from "@/components/LandingPage/LandingComponent";
import HomeProfessionals from "@/components/HomeProfessionals";

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
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})