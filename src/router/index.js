import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import LucasView from "../views/LucasView.vue"
import ObjectiveView from "../views/ObjectiveView.vue"
import MyFlowView from "../views/MyFlowView.vue"
import VideoView from "../views/VideoView.vue"
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
            path: "/Objective",
            name: "Objective",
            component: ObjectiveView
        },
        {
            path: "/MyFlow",
            name: "MyFlow",
            component: MyFlowView
        },
        {
            path: "/Video",
            name: "Video",
            component: VideoView
        }
    ]
})

export default router