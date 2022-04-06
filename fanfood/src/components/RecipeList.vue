<template>
  <div>
    <RecipeCard :recipeProps="recipes" />
  </div>
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
      // dans le cycle de vie du composant, je suis au niveau de la création de ce dernier
      console.log('Je suis dans created');
      // quand le composant va etre créé, on voudra charger les recettes depuis l'API
      this.recipes = await recipeService.loadRecipes();
      // console.log(this.recipes);
  },
}

</script>

<style scoped lang="scss">
</style>
