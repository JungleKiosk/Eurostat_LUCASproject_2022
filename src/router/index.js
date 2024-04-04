import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import LucasView from "../views/LucasView.vue"
import StepsView from "../views/StepsView.vue"
/* ------------------------------------------------- */



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/lucas",
            name: "lucas",
            component: LucasView
        },
        {
            path: "/steps",
            name: "steps",
            component: StepsView
        }
    ]
})

export default router