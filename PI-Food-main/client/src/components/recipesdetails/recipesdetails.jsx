import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeDetail } from '../../actions/index'
import { Link } from 'react-router-dom'

function RecipeDetail({ match, recipe, getRecipebyid }) {
 
    useEffect(() => {
        getRecipebyid(match.match.params.id)
    },[])
    
    console.log(recipe)
    return (
        <div >
            <Link to={'/home'}>Home </Link>
        
         {recipe.map((a, i)=> { 
         return  <div key= {i}>
         <h2>{a.title} </h2>
         <h4>Código de receta: {a.id}</h4>
         <img src={a.image} /> 
         <p>healthyness: {a.healthyness}</p>
         <p>Diets: {a.diets.map((diet) => {
             return diet.name
         }).join(', ')}</p> 
         <p>score: {a.score}</p>
         <p>steps: {a.steps}</p>
         <p>summary: {a.summary}</p>
     </div> 
})}
</div>
    )
}

const mapStateToProps = (state) => {

    return {
        recipe: state.recipedetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecipebyid: (id) => dispatch(getRecipeDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail)