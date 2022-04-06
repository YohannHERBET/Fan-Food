<template>
  <div id="app">
    <Header/>
    <RecipeList/>
    <!-- <RecipeCard/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import RecipeList from './components/RecipeList.vue';
// import RecipeCard from './components/RecipeCard.vue';


export default {
  name: 'App',
  components: {
    Header,
    RecipeList,
    // RecipeCard,
  }
}
</script>


    RecipeCard<style lang="scss">
</style>
