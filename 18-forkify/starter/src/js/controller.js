import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import { async } from 'regenerator-runtime';

// if (module.hot) {
//   module.hot.accept();
// };


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id)

    if (!id) return;
    recipeView.renderSpinner();

    //0. Update results view to mark selected seach result
    resultsView.update(model.getSearchResultsPage);

    //3.Updating recipe   
    bookmarksView.update(model.state.bookmarks);
    //1. Loading recipe
    await model.loadRecipe(id);

    //2. Redering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }

};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //1) Get search query
    const query = searchView.getQuery();
    // console.log(query);
    if (!query) return;

    //2) Load search results
    await model.loadSearchResults(query);

    //3. Render Results
    // console.log(model.state.search.result);
    // resultsView.render(model.state.search.result);
    resultsView.render(model.getSearchResultsPage());

    //4. Render inital paginaion
    paginationView.render(model.state.search);

  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  //1. Render NEW Results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //2. Render NEW paginaion Button
  paginationView.render(model.state.search);
  console.log(goToPage);
};

const controlServings = function (newServings) {
  //Update the recipe servings (in state)
  model.updateServings(newServings);

  //update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //1. adds or remove bookmarks
  console.log(model.state.recipe.bookmarked);
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //2. update recipe view
  console.log(model.state.recipe);
  recipeView.update(model.state.recipe);

  //Render bookmarks
  bookmarksView.render(model.state.bookmarks)
}

const init = function () {
  bookmarksView.addHandlerRender(controlAddBookmark);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();