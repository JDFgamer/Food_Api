import { Link } from "react-router-dom";
import React from 'react';

export function RecipeCard({ title,diets,id,image }) {
  return (
    <div >
        <div>
        <h5>Title: {title}</h5>
        <h5>Diets: {diets}</h5>
        <img src={image} alt='https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg'/>
        </div>
        <Link to={`/recipe/` + id}> Details
      </Link>
    </div>
  );
}

export default RecipeCard