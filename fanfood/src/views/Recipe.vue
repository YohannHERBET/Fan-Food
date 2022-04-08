
<template>
<section class="mx-24"
>
  <h1 class="text-center uppercase font-black text-3xl my-10">{{recipe.slug}}</h1>
  <img class="w-50 mx-auto" :src="recipe.thumbnail" alt="image of the recipe" />
  <ul class="mt-7 text-center ">
    <li class="mb-3 text-2xl mx-auto text-gray-700 dark:text-gray-400">
                Difficulté : {{recipe.difficulty}}
    </li>
    <li class="mb-3 text-2xl mx-auto text-gray-700 dark:text-gray-400">
                {{recipe.description}}
    </li>
  </ul>

  <h2 class="text-center uppercase font-black text-2xl my-10">Ingrédients</h2>

  <ul class="text-center text-2xl flex flex-col ">
    <li v-for="recipeIngredient in recipe.ingredients"
        :key="recipeIngredient.id"
    >
    
      {{recipeIngredient.quantity}} {{recipeIngredient.unit}} {{recipeIngredient.name}}

      <input type="checkbox" class="mb-8 ml-1 w-8 h-8 bg-white">
    </li>
  </ul>

  <h2 class="text-center uppercase font-black text-2xl my-10">Instructions</h2>
  
  <ul class="text-center text-2xl flex flex-col pb-10">
    <li v-for="recipeInstructions in recipe.instructions"
        :key="recipeInstructions.id"
    >
    
      {{recipeInstructions}}

      <input type="checkbox" class="mb-8 ml-1 w-8 h-8 bg-white">
    </li>
  </ul>

  <h1 class="text-center uppercase font-black text-3xl pb-20">Bon appétit !</h1>

</section>
</template>

<script>
  export default {
    name: 'FanFood-recipe',

    data(){
      return{
        recipe: {},
      };
    },

    async created(){
      if(this.$store.state.recipes){
        this.$store.state.recipes.forEach((recipe) => {
          if (this.$route.params.slug == recipe.slug) {
            this.recipe = recipe;
          }
        })
      }
    },
  }
</script>
