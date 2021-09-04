const { Router } = require('express');
const {postRecipe} = require('../controllers');



const router = Router();

router.post('/', postRecipe)

module.exports = router;