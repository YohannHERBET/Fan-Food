import { createRouter, createWebHistory } from 'vue-router'
import RecipeList from '../views/RecipeList.vue'
import Recipe from '../views/Recipe.vue'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
