import {createRouter, createWebHashHistory} from "vue-router";
import HomeComponent from "@/components/HomePage/HomeComponent";
import LandingComponent from "@/components/LandingPage/LandingComponent";

const routes = [
    {
        path: "/",
        component: HomeComponent,
    },
    {
        path: "/landing-page",
        component: LandingComponent,
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})