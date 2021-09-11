import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../recipeCard/recipecard';

function RecipesCards({ recipe }) {
  const [actualStaterecipes, setActualStaterecipes] = useState([])
  const recipePerPage = 9
    const pages = Math.ceil(recipe.length / recipePerPage)
    
    const [currentPage, setCurrentPage] = useState(1)


  const showPages = (pageNum) => {
    const index = pageNum * recipePerPage + 1;
    setActualStaterecipes(recipe.slice(index - recipePerPage - 1, index - 1));
    setCurrentPage(pageNum)

}
useEffect(() => {

  showPages(1)

}, [recipe])

  return (
    <>
    <div>
      <div >
                    <button  onClick={() => showPages(currentPage > 1 ?
                        currentPage - 1 : currentPage)}>{'☚'}</button>
                    <div>
                        
                            
                        
                    </div>
                    <button onClick={() => showPages(currentPage < pages ?
                        currentPage + 1 : currentPage)}>{`☛`}</button>
                </div>
                {actualStaterecipes && actualStaterecipes.map((recipe, i) => (

      
         
        <RecipeCard
          key={recipe.id}
          image={recipe.image}
          id={recipe.id}
          title={recipe.title}
          score ={recipe.score}
          diets= {recipe.diets.map((e) => {return e.name }).join(", ")}
        />
        
        ))
      }
    </div>
    <div></div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    recipe: state.recipes,
  };
};

export default connect(mapStateToProps, null)(RecipesCards);