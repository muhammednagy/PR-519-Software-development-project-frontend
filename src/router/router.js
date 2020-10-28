import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: "/",
            meta: {
                title: 'HomePage'
            },
            component: () => import("@/components/home/Home")
        },
        {
            path: "/login",
            meta: {
                title: 'Login'
            },
            component: () => import("@/components/authentication/Login")
        },
    ]
});

const DEFAULT_TITLE = 'FamHi';
router.afterEach((to) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router;
