import {createRouter, createWebHashHistory} from "vue-router";
import HomeComponent from "@/components/HomePage/HomeComponent";
import LandingComponent from "@/components/LandingPage/LandingComponent";
import HomeProfessionals from "@/components/HomeProfessionals";
import FindDoctor from "@/components/FindDoctorPage/FindDoctor";
import Profile from "@/components/Profile/Profile";
import EditProfile from "@/components/Profile/EditProfile";

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
        path: "/doctor-profile",
        component: Profile,
        props: true

    },
    {
        path: "/edit-profile",
        component: EditProfile,
        props: true

    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})