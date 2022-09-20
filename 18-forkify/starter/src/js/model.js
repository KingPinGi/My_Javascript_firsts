import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
import { RES_PER_PAGE } from './config.js';

export const state = {
    recipe: {},
    search: {
        query: '',
        result: [],
        resultPerPage: RES_PER_PAGE
    }
};

export const loadRecipe = async function (id) {
    try {
        console.log(id);
        const data = await getJSON(`${API_URL}${id}`);

        const {
            recipe
        } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.sourceUrl,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cookingTime,
            ingredients: recipe.ingredients,
        };
        console.log(state.recipe);
    } catch (err) {
        //temp error handdling
        console.error(`${err}`);
        throw err;
    }
};

export const loadSearchResults = async function (query) {
    try {
        console.log(query)
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`);
        console.log(data);

        state.search.result = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
            };
        });

    } catch (err) {
        console.log(`${err}`);
        throw err;
    }
};

export const getSearchResultsPage = function (page) {
    const start = (page - 1) * state.resultPerPage; //0;
    const end = (page * state.resultPerPage);     //9;

    return state.search.result.slice(start, end)
}