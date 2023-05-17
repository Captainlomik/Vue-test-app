import MainPage from '@/pages/MainPage'
import PostPage from '@/pages/PostPage'
import AboutPage from '@/pages/AboutPage'
import DetailPostPage from '@/pages/DetailPostPage'
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path:'/', component: MainPage
    },
    {
        path:'/posts', component: PostPage
    },
    {
        path:'/about', component: AboutPage
    },
    {
        path:'/posts/:id', component: DetailPostPage
    },
]

const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router