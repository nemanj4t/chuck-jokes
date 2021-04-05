import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CategoriesView from '../views/CategoriesView.vue'
import JokeView from '../views/JokeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Categories',
        component: CategoriesView
    },
    {
        path: '/categories/:category',
        name: 'Joke',
        component: JokeView
    },
    {
        path: '/:any(.*)',
        name: 'Universal',
        component: CategoriesView
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
