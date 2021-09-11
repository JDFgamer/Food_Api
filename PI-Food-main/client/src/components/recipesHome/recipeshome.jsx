import React, { useEffect } from "react";
import { connect } from "react-redux"
import { getRecipes } from "../../actions";
import NavBar from "../navBar/Navbar";
import RecipesCards from "../RecipesCards/recipescards";



function RecipesHome({ recipe, Recipesget }) {

    useEffect(() => {
        Recipesget()
    }, [])


    return (
        <div >
            <NavBar />
            <div>
                <div><h1>Recipes for your table</h1></div>
                <RecipesCards recipe = {recipe}/>
                    

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        recipe: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Recipesget: () => dispatch(getRecipes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesHome)