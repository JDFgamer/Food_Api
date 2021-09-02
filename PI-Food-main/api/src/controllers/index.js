require('dotenv').config();
const axios = require('axios');
const { APIKEY } = process.env;
const { v4: uuidv4 } = require('uuid');
const { Recipe, Diet } = require('../db.js');


async function APIcall(){
    try{
    const recipeApi = await axios.get(
     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`
      );
      const requiredInfo = recipeApi.data.results.map((recipe) => {
        return {
          title: recipe.title,
          diets: recipe.diets.map((diet) => {
            return { name: diet };
          }),
          healthyness: recipe.healthScore,
          summary: recipe.summary,
          image: recipe.image,
          id: recipe.id,
          score: parseInt(recipe.spoonacularScore),
          steps: recipe.analyzedInstructions
            .map((r) => r.steps.map((s) => s.step))
            .flat(2)
            .join(""),
        };
       }
    )
    return requiredInfo
    }
    catch{e=>console.log(e)}
}
async function getAllRecipes(req, res, next) {
  const { name } = req.query;
  if (!name) {
    try {
      const requiredInfo = await APIcall()
      const recipeBD = await Recipe.findAll({
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      const response = await Promise.all([recipeBD, requiredInfo]);
      return res.send(response);
    } catch (err) {
      next(err);
    }
  } else {
    const query = name.toLowerCase() ;
    try {
      const requiredInfo = await APIcall()

      const filteredRecipeApi = requiredInfo.filter((s) =>{
        if(s.title.toLowerCase().includes(query)){
          return s
        }}
      );

      const recipeBD = await Recipe.findAll({
        where: {
          title:`${query}`
         },
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      const response = await Promise.all([recipeBD, filteredRecipeApi]);

      return res.send(response);

    } catch {
      (err) => next(err);
    }
  }
}

async function postRecipe (req, res,next) {
  let {titles,
      image,
      description,
      servings,
      steps,
      dieta } = req.body;
 if (!titles || !description){
    return res.status(404).send("Se necesita nombre y descripsion")
 }
  try{
      const recipeNew = await Recipe.create({
      titles,
      image,
      description,
      servings,
      steps,
      id: uuidv4(),
  })
  res.send("Creaste una receta papu ! ")
}
catch {error => next(error)
}
  /* let dietDb= await Dieta.findAll(dieta)
  
    recipeNew.addDieta(dietDb) */
    
}




module.exports = {getAllRecipes, postRecipe}