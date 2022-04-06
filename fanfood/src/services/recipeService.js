import axios from 'axios';

const recipeService = {

  baseURI: 'https://api.spoonacular.com/recipes',
  apiKey: '?apiKey=37d6eaa6152b44759b6545f6058fd75a',

  /**
   * Methode qui va nous permettre de récupérer les recettes depuis l'API
   */
  async loadRecipes(){
      console.log('Je vais chargr les recette')
      const response = await axios.get(recipeService.baseURI + '/complexSearch' + recipeService.apiKey + '&minCalories=800'  );

      console.log(response.data.results);
      return response.data.results[0];
  },
};

export default recipeService;