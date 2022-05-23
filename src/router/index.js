import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Inbox from '../views/Inbox.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/inbox',
        name: 'Inbox',
        component: Inbox
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;