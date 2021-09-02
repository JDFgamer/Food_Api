require('dotenv').config();
const { Router } = require('express');
const {getAllRecipes, postRecipe, getSerchByID} = require('../controllers');
const axios = require('axios');
const { APIKEY } = process.env;


const router = Router();

 router.get('/recipe', getAllRecipes)

router.get('/:id', getSerchByID)

router.get('/types/:diet', (req, res) => {
    let { diet } = req.params;
    let { name } = req.query;
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&number=100&addRecipeInformation=true&apiKey=${APIKEY}/${diet}`)
        .then((resultado) => resultado.data)
        .then((resultado) => res.send(resultado))
        .catch(() => res.status(404).send("El nombre no existe o fue mal cargado"));
})
 

 router.post('/recipe', postRecipe)
 


module.exports = router;