import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Work from '@/components/pages/Work'
import WorkDetails from '@/components/pages/WorkDetails'
import Search from '@/components/pages/Search'

Vue.use(Router)

export default new Router({
    routes: [

        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/About',
            name: "About",
            component: About
        },
        {
            path: '/Work',
            name: "Work",
            component: Work
        },
        {
            path: '/WorkDetails/:id',
            name: "WorkDetails",
            component: WorkDetails
        },
        {
            path: '/Search',
            name: "Search",
            component: Search
        }

    ]
})