<template>
  <section class="w-full" v-if="recipes.length">
    <h1 class="text-center uppercase font-black text-3xl my-10">Liste des recettes</h1>
    <ul class="flex flex-wrap justify-evenly">
    <li class="w-96 mb-12 mx-6"
        v-for="recipe in recipes"
        :key="recipe.id"
    >
        <RecipeCard :recipeProps="recipe" />
    </li>
    </ul>
</section>
</template>

<script>

import recipeService from '../services/recipeService';
import RecipeCard from './RecipeCard.vue';

export default {
  name: 'Recipe-list',
  components: {
    RecipeCard,
  },
  data(){
      return{
          recipes: [],
      };
  },
  async created(){
      this.recipes = await recipeService.loadRecipes();
  },
}

</script>

<style scoped lang="scss">
</style>
