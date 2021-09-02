require('dotenv').config();
const { Router } = require('express');
const {getAllRecipes, postRecipe} = require('../controllers');
const axios = require('axios');
const { APIKEY } = process.env;


const router = Router();

 router.get('/recipe', getAllRecipes)



router.get('/:id', (req, res) => {
    let { id } = req.params
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}`)
        .then(result => result.data)
        .then(result => {
            res.send(result)
        })
        .catch(() => { res.send("No existe La id o fue borrada") })
})

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