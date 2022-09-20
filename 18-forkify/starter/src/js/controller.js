import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    //1. Loading recipe
    // const res = await fetch(
    //   'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcfb2'
    // ); 
    await model.loadRecipe(id);

    //2. Redering recipe
    recipeView.render(model.state.recipe);


  } catch (err) {
    alert(err);
    recipeView.renderError(`${err}`);
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();