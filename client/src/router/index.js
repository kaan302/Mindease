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
import SignupComponent from "@/components/Signup/SignupComponent";

const routes = [
    {
        path: "/",
        name: "landing-home",
        component: LandingComponent,
        meta: {
            title: "Home"
        },
    },
    {

        path: "/home-professionals",
        name: "professionals",
        component: HomeProfessionals,
        meta: {
            title: "Consultant"
        },
    },
    {
        path: "/home-patient",
        name: "patient",
        component: HomePatient,
        meta: {
            title: "Patient"
        },
    },
    {
        path: "/find-doctor",
        name: "findDoctor",
        component: FindDoctor,
        props: true,
        meta: {
            title: "Search consultant"
        },
    },
    {
        path: "/appointment",
        name: 'appointment',
        component: Appointment,
        props: (route) => ({ doctor: JSON.parse(route.query.doctor) }),
        meta: {
            title: "Appointment"
        },

    },
    {
        path: "/doctor-profile",
        name: "doctorProfile",
        component: Profile,
        props: true,
        meta: {
            title: "Profile"
        },

    },
    {
        path: "/edit-profile",
        name: "editProfile",
        component: EditProfile,
        props: true,
        meta: {
            title: "Edit profile"
        },
    },
    {
        path: "/all-consults",
        name: "consults",
        component: AllConsults,
        props: true,
        meta: {
            title: "All consultants"
        },
    },
    {
        path: "/about",
        name: "about",
        component: About,
        props: true,
        meta: {
            title: "About Us"
        },
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
        props: true,
        meta: {
            title: "Contact"
        },
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        props: true,
        meta: {
            title: "Login"
        },
    },
    {
        path: "/signup",
        name: "signup",
        component: SignupComponent,
        props: true,
        meta: {
            title: "SignUp"
        },
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Page Title';
    next();
});


