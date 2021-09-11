import {GET_RECIPES,GET_RECIPE_DETAIL,CREATE_RECIPE,GET_BY_DIET} from '../actions/index';

const initialState = {
    recipe: [],
    recipedetails:[],
    diets:[],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipe: action.payload,
            };
        case GET_RECIPE_DETAIL:
            return {
                ...state,
                recipedetails: action.payload,
            }
        case CREATE_RECIPE:
            return{
                ...state,
                recipe: action.payload,
            }
        case GET_BY_DIET:
            return{
                ...state,
                diets: action.payload,
            }
        default:
            return {
                ...state
            };
    };
};


export default reducer;