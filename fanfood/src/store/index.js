import { createStore } from 'vuex'
import recipeService from '../services/recipeService';

export default createStore({
  state: {
    recipes: null,
    services:{
      recipe: recipeService,
    }
  },
  getters: {
    getRecipes(state) {
      return state.recipes;
    },    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
