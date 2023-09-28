import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import { MotionPlugin } from '@vueuse/motion'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/style/style.css'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)

app.mount("#app")
