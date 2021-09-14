import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipeDetail } from '../../actions/index'
import { Link } from 'react-router-dom'
import styles from './recipedetails.module.css';

function RecipeDetail({ match, recipe, getRecipebyid }) {
 
    useEffect(() => {
        getRecipebyid(match.match.params.id)
    },[])
    
    
    return (
        <div  >
            <Link to={'/home'}> <button className={styles.btn} ><div className={styles.noselect}> Home </div> </button><div className={styles.circle} ></div>  </Link>
        
         {recipe.map((a, i)=> { 
         return  <div  className={styles.card} key= {i}>
         <h2 id={ styles.title } >{a.title} </h2>
         <p id={ styles.id } > ID: {a.id}</p>
         <img id={styles.card_image} src={a.image || 'https://estaticos.muyinteresante.es/uploads/images/article/55365cd73787b2187a1f0790/portada.jpg' }  /> 
         <p className={ styles.text}>healthyness: {a.healthyness}</p>
         <p className={ styles.text} >Diets: {a.diets.map((diet) => {
             return diet.name
         }).join(', ')}</p> 
         <p className={ styles.text} >score: {a.score}</p>
         <p className={ styles.text} >steps: {a.steps}</p>
         <p className={ styles.text} >summary: {a.summary}</p>
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