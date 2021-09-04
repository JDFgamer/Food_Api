const { Router }= require('express');
const Recipesrouter = require("./recipes");
const Reciperouter = require("./recipe")
const Dietrouter = require("./diets");
const Aboutrouter = require("./about");

const router = Router();

router.use('/recipe', Reciperouter);
router.use('/recipes', Recipesrouter);
router.use('/diet', Dietrouter);
router.use('/About', Aboutrouter);





module.exports = router;
