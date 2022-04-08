import { createRouter, createWebHistory } from 'vue-router'
import RecipeList from '../views/RecipeList.vue'
import Recipe from '../views/Recipe.vue'
import AboutUs from '../views/AboutUs.vue'
import Contacts from '../views/Contacts.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: RecipeList
  },
  {
    path: '/recette/:slug',
    name: 'recipe',
    component: Recipe
  },
  {
    path: '/a-propos-de-nous',
    name: 'aboutus',
    component: AboutUs
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
