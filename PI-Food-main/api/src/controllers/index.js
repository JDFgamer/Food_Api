require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { v4: uuidv4 } = require('uuid');
const { Recipe, Diet } = require('../db.js');
const {Sequelize} = require('sequelize');


async function APIcall(){
    try{
    const recipeApi = await axios.get(
     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      );
      const requiredInfo = recipeApi.data.results.map((recipe) => {
        return {
          title: recipe.title,
          diets: recipe.diets.map((diet) => {
            return { name: diet };
          }),
          healthyness: parseInt(recipe.healthScore),
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
    catch (error) {console.log(error)}
}


async function getAllRecipes(req, res) {
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
      return res.send(await Promise.all(recipeBD.concat(requiredInfo)));
    } catch(err) {
      res.json({err})
      console.error(err);
  }
  } else {
    const query = name.toLowerCase();
    try {
      const requiredInfo = await APIcall()

      const filteredRecipeApi = requiredInfo.filter((s) =>{
        if(s.title.toLowerCase().includes(query)){
          return s
        }
       } 
      );

      const recipeBD = await Recipe.findAll({
        where: {
          title:{[Sequelize.Op.like]:`%${query}%`}
        },
        include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      

      return res.send(await Promise.all(recipeBD.concat(filteredRecipeApi)));

    } catch(err) {
      res.json({err})
      console.error(err);
  }
  }
}

async function getSerchByID(req, res) {
  const { id } = req.params;
  const newId = parseInt(id);
  
    try {
      const requiredInfo = await APIcall()

      const filteredRecipeApi = requiredInfo.filter((s) => (s.id === newId)
      
      );
       if(id.length > 6){
        const recipeBD = await Recipe.findByPk(id,{
          include: {
          model: Diet,
          attributes: ["name"],
          through: {
            attributes: [],
          },

        }});
        return res.json(await Promise.all([recipeBD]));
       }else{
      return res.json(await Promise.all(filteredRecipeApi))
       }
    } catch(err) {
        res.json({err})
        console.error(err);
    }
}

async function postRecipe (req, res) {
  let {title,
      summary,
      healthyness,
      steps,
      score,
      diets } = req.body;
 if (!title || !summary){
    return res.status(404).send("Se necesita nombre y descripsion")
 }
  try{
      const newRecipe = await Recipe.create({
      title,
      summary,
      healthyness,
      steps,
      score,
      id: uuidv4(),
  });
  if(diets){
    const  dietDb = await Diet.findAll({
      where: {
        name: diets
      },
      attributes:[
        'id'
      ] }
    )
    newRecipe.addDiet(dietDb)
  }
  res.send(newRecipe);
}
catch(err) {
  res.json({err})
  console.error(err);
}
}




module.exports = {getAllRecipes, postRecipe, getSerchByID}