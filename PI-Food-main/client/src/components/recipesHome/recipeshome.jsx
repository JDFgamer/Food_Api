import React, { useEffect } from "react";
import { connect } from "react-redux"
import { getRecipes } from "../../actions";
import NavBar from "../navBar/Navbar";
import RecipesCards from "../RecipesCards/recipescards";


function RecipesHome({ recipe, getRecipes }) {

    useEffect(() => {
        getRecipes()
    }, [])


    return (
        <div >
            <NavBar />
            <div>
                <RecipesCards
                      recipe = {recipe}     
                        />
                    

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        recipe: state.recipe
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecipes: () => dispatch(getRecipes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesHome)