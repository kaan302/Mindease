import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import { MotionPlugin } from '@vueuse/motion'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/style/style.css'
import 'v-calendar/style.css';
import { setupCalendar } from 'v-calendar';


const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(setupCalendar, {})

app.mount("#app")
