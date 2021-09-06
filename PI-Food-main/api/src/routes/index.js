const { Router }= require('express');
const Recipesrouter = require("./recipes");
const Dietrouter = require("./diets");

const router = Router();


router.use('/recipe', Recipesrouter);
router.use('/types', Dietrouter);





module.exports = router;
