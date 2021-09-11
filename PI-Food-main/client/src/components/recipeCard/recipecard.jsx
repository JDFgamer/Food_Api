import { Link } from "react-router-dom";
import React from 'react';
import styles from './styles.module.css';

export function RecipeCard({ title,diets,id,image,score }) {
  return (
    <div className='card'>
        <div className={styles.card}>
        <h2 className={styles.cardh4}>Title: {title}</h2>
        <img src={image} alt='https://estaticos.muyinteresante.es/uploads/images/article/55365cd73787b2187a1f0790/portada.jpg'/>
        <h4 className={styles.cardh5}>Diets: {diets}</h4>
        <h5 className={styles.cardh5}>Score: {score}</h5>
        <Link to={`/recipe/` + id}> Details
      </Link>
        </div>
    </div>
  );
}

export default RecipeCard