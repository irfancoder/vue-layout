/** @format */

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Login from '../pages/login.vue'
import Layout1 from '../pages/blueprint.vue'
import Layout2 from '../pages/blueprint2.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home:index',
        meta: {
            layout: [Layout1]
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'auth:login:index',
        meta: {
            layout: [Layout1, Layout2]
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
