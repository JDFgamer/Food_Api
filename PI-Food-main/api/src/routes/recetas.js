const { Router } = require('express');
const {getAllRecipes, postRecipe, getSerchByID} = require('../controllers');



const router = Router();

router.get('/recipe', getAllRecipes)

router.get('/:id', getSerchByID)

router.post('/recipe', postRecipe)
 


module.exports = router;