<template>
  <div class="bg-blue-50 h-screen" id="app">
    <Header/>
    <RecipeList/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import RecipeList from './components/RecipeList.vue';


export default {
  name: 'App',
  components: {
    Header,
    RecipeList,
  }
}
</script>
