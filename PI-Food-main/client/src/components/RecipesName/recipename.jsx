import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



 function RecipesName({recipe}) {


        return (
            <div >
                <Link to={'/home'}>Home </Link>
            {recipe.map((recipe)=>{return(
             <div key= {recipe.id}>
             <h2>{recipe.title} </h2>
             <h4>Código de receta: {recipe.id}</h4>
             <img src={recipe.image || 'https://estaticos.muyinteresante.es/uploads/images/article/55365cd73787b2187a1f0790/portada.jpg' } alt='imagen not found' /> 
             <p>healthyness: {recipe.healthyness}</p>
             <p>Diets: {recipe.diets.map((b) => {
                 return b.name
                }).join(', ')}</p>
             <p>score: {recipe.score}</p>
             <p>steps: {recipe.steps}</p>
             <p>summary: {recipe.summary}</p>
         </div> 
          )})}

            </div>
        )


    }

    const mapStateToProps = (state) => {

        return {
            recipe: state.recipe,
        }
    }


    export default connect(mapStateToProps, null)(RecipesName)