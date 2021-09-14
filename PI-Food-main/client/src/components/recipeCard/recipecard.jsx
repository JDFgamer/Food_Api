import { Link } from "react-router-dom";
import React from 'react';
import styles from './styles.module.css';

export function RecipeCard({ title,diets,id,image,score }) {
  return (
    <div className={styles.list_card}>
        <div className={styles.card}>
        <h2 className={styles.card_title}>{title}</h2>
        <img className={styles.card_image} src={image || 'https://estaticos.muyinteresante.es/uploads/images/article/55365cd73787b2187a1f0790/portada.jpg' } alt= 'imagen not found 404' />
        <h4 className={styles.card_h5}>Diets: {diets}</h4>
        <h5 className={styles.card_score}>Score: {score}</h5>
       <Link to={`/recipe/` + id}><button className={styles.btn}> <div className={styles.noselect}> Details </div> </button>
      </Link> <div className={styles.circle}></div>
      
        </div>
    </div>
  );
}

export default RecipeCard