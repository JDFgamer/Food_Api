import React, { useEffect } from 'react';
import { orderRecipes, getRecipes,filterRecipes,getByDiet } from '../../actions/index';
import { connect } from 'react-redux'


function RecipesOrderFilters({orderrecipes,OrderRecipesAZ,diets,getAllrecipes,filterRecipesDiet,getByDiet }) {

    useEffect(() => {
        getByDiet()
    }, [])

    function handleTitle(event) {

        if (event.target.value === 'Title') {
            return getAllrecipes();
        }
        OrderRecipesAZ(orderrecipes, { title: event.target.value })

    }

    function handleScore(event) {
        if (event.target.value === 'score') {
            return getAllrecipes();
        }
        OrderRecipesAZ(orderrecipes, { score: event.target.value })

    }


    function handleFilterDiet(event) {
        if (event.target.value === 'dieta') {
            return getAllrecipes();
        }
        filterRecipesDiet(orderrecipes, { diets: event.target.value })

    }

    console.log(orderrecipes,diets)

    return (
        <div >
            <div>

                <select  onChange={handleTitle}>
                    <option label='order by name' value='Title'></option>
                    <option value='Ascendent'>Ascendente</option>
                    <option value='Descendent'>Descendente</option>
                </select>

            </div>
            <div>

                <select  onChange={handleScore}>
                    <option label='order by score' value='score'></option>
                    <option value='Ascendent' >Ascendente</option>
                    <option value='Descendent' >Descendente</option>
                </select>

            </div>
            <div>
                <select  onChange={handleFilterDiet}>
                    <option key="-1" label='Filtered by diet' value='dieta'></option>
                    {diets.length ? diets.map((diets, i) => (
                        <option key={i} value={diets.name} label={diets.name}></option>
                    )) : null}
                </select>
            </div>
        </div>
    )

}


const mapStateToProps = ((state) => {

    return {
        orderrecipes: state.orderedRecipe,
        diets: state.diets
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        OrderRecipesAZ: (orderTarget, receta) => dispatch(orderRecipes(orderTarget, receta)),
        getAllrecipes: () => dispatch(getRecipes()),
        filterRecipesDiet: (orderTarget, recipe) => dispatch(filterRecipes(orderTarget, recipe)),
        getByDiet:()=>dispatch(getByDiet())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesOrderFilters)