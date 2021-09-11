import { GET_RECIPES, GET_RECIPE_DETAIL, CREATE_RECIPE, GET_BY_DIET, GET_RECIPE_BY_NAME, CLEAR_RECIPE, ORDER_RECIPES, FILTER_RECIPES } from '../actions/index';

const initialState = {
    recipe: [],
    recipes: [],
    recipedetails: [],
    orderedRecipe: [],
    diets: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                orderedRecipe: action.payload,
            };
        case GET_RECIPE_DETAIL:
            return {
                ...state,
                recipedetails: action.payload,
            }
        case CREATE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.push(action.payload),
            }
        case GET_BY_DIET:
            return {
                ...state,
                diets: action.payload,
            }
        case GET_RECIPE_BY_NAME:
            return {
                ...state,
                recipe: action.payload,

            }
        case CLEAR_RECIPE:
            return {
                ...state,
                recipe: action.payload,
            }
        case ORDER_RECIPES:
            return {
                ...state,
                recipes: action.payload.slice(),
            }
        case FILTER_RECIPES:
            return {
                ...state,
                recipes: action.payload,
            };
        default:
            return {
                ...state
            };
    };
};


export default reducer;