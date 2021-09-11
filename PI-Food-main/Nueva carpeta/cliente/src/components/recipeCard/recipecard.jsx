import { Link } from "react-router-dom";
import React from 'react';
import styles from './styles.module.css';

export function RecipeCard({ title,diets,id,image }) {
  return (
    <div className='card'>
        <div className={styles.card}>
        <h2 className={styles.cardh4}>Title: {title}</h2>
        <img src={image} alt='https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg'/>
        <h4 className={styles.cardh5}>Diets: {diets}</h4>
        <Link to={`/recipe/` + id}> Details
      </Link>
        </div>
    </div>
  );
}

export default RecipeCard