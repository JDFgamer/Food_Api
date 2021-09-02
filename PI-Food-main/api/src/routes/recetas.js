require('dotenv').config();
const { Router } = require('express');
const {getAllRecipes} = require('../controllers');
const axios = require('axios');
const { APIKEY } = process.env;
const { v4: uuidv4 } = require('uuid')
const {Recipe, Dieta} = require('../db.js')





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
 

 router.post('/recipe', async (req, res,next) => {
    let {name,
        imagen,
        description,
        author,
        pasoapaso,
        cantidad,
        dieta } = req.body;
   if (!name || !description){
      return res.status(404).send("Se necesita nombre y descripsion")
   }
    try{
        const recipeNew = await Recipe.create({
        name,
        imagen,
        description,
        author,
        pasoapaso,
        cantidad,
        id: uuidv4(),
    })
    res.send("Creaste una receta papu ! ")
}
catch {error => next(error)
}
    /* let dietDb= await Dieta.findAll(dieta)
    
      recipeNew.addDieta(dietDb) */
      
})
 


module.exports = router;