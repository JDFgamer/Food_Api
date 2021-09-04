const { Router } = require('express');
const {getAllRecipes, getSerchByID} = require('../controllers');



const router = Router();

router.get('/', getAllRecipes)

router.get('/:id', getSerchByID)


 


module.exports = router;