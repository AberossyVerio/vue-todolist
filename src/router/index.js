import { createRouter, createWebHistory } from "vue-router";

const routes = [
 { path: '/', component: () => import('../views/Land.vue') },
 { path: '/about', component:() => import('../views/About.vue') },
 { path: '/todo', component:() => import('../views/Todopage.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router