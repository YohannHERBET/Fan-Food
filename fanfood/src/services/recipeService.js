import axios from 'axios';

const recipeService = {

  baseURI: 'http://localhost:3001/recipes',

  /**
   * Methode qui va nous permettre de récupérer les recettes depuis l'API
   */
  async loadRecipes(){
      const response = await axios.get(recipeService.baseURI);
      console.log(response.data);
      return response.data;
  },
};

export default recipeService;