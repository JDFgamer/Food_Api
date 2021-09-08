import {GET_RECIPES,GET_RECIPE_DETAIL} from '../actions/index';

const initialState = {
    recipe: [],
    recipedetails:[]
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
        default:
            return {
                ...state
            };
    };
};


export default reducer;