import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Cities from '../views/Cities.vue'
import Contractors from '../views/Contractors.vue'
import Courses from '../views/Courses.vue'
import Emails from '../views/Emails.vue'
import Events from '../views/Events.vue'
import Feedback from '../views/Feedback.vue'
import Merchants from '../views/Merchants.vue'
import People from '../views/People.vue'
import Videos from '../views/Videos.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/cities',
        name: 'Cities',
        component: Cities,
    },
    {
        path: '/contractors',
        name: 'Contractors',
        component: Contractors,
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Courses,
    },
    {
        path: '/emails',
        name: 'Emails',
        component: Emails,
    },
    {
        path: '/events',
        name: 'Events',
        component: Events,
    },
    {
        path: '/feedback',
        name: 'Feedback',
        component: Feedback,
    },
    {
        path: '/merchants',
        name: 'Merchants',
        component: Merchants,
    },
    {
        path: '/people',
        name: 'People',
        component: People,
    },
    {
        path: '/videos',
        name: 'Videos',
        component: Videos,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                selector: to.hash
            }
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router
