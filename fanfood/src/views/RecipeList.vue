<template>
  <section class="w-full" v-if="recipes.length">
    <h1 class="text-center uppercase font-black text-3xl my-10">Nos recettes</h1>
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
import RecipeCard from '../components/RecipeCard.vue';

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
    if(this.$store.state.recipes){
        this.recipes = this.$store.state.recipes;
    } else {
        this.recipes = await this.$store.state.services.recipe.loadRecipes();
        this.$store.state.recipes = this.recipes;
    }
  },
}
</script>
