import {createRouter, createWebHashHistory} from "vue-router";
import LandingComponent from "@/components/LandingPage/LandingComponent";
import HomeProfessionals from "@/components/HomePage/HomeProfessionals";
import FindDoctor from "@/components/FindDoctorPage/FindDoctor";
import Appointment from "@/components/Appointment/Appointment";
import Profile from "@/components/Profile/Profile";
import EditProfile from "@/components/Profile/EditProfile";
import AllConsults from "@/components/Consults/AllConsults";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Login from "@/components/Authentication/Login";
import HomePatient from "@/components/HomePage/HomePatient";

const routes = [
    {
        path: "/",
        name: "landing-home",
        component: LandingComponent,
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
        path: "/home-patient",
        component: HomePatient,
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
    },
    {
        path: "/all-consults",
        component: AllConsults,
        props: true
    },
    {
        path: "/about",
        component: About,
        props: true
    },
    {
        path: "/contact",
        component: Contact,
        props: true
    },
    {
        path: "/login",
        component: Login,
        props: true
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})