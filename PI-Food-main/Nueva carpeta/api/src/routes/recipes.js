const { Router } = require('express');
const {getAllRecipes, getSerchByID,postRecipe} = require('../controllers');



const router = Router();

router.get('/', getAllRecipes)

router.get('/:id', getSerchByID)

router.post('/', postRecipe)

 


module.exports = router;