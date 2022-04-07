<template>
<div 

v-for="recipe in recipes"
        :key="recipe.id">coucou</div>
        <!-- Je veux récupérer les recettes dans le state (getter surrement)
        / boucler dessus / comparer leur slug avec le slug de l'url pour avoir la bonne recette -->
</template>
<script>

  export default {
    name: 'FanFood-recipe',
    data(){
      return{
          recipe: [],
      };
  },
  }
</script>
