import React from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../recipeCard/recipecard';

function RecipesCards({ recipe }) {

  return (
    <div>

      {console.log(recipe) }
      {recipe.map((recipe) => (
         recipe.map((recipe => (
        <RecipeCard
          key={recipe.id}
          image={recipe.image}
          id={recipe.id}
          title={recipe.title}
          diets= {recipe.diets.map((e) => {return e.name }).join(", ")}
        />

        )))
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
  };
};

export default connect(mapStateToProps, null)(RecipesCards);