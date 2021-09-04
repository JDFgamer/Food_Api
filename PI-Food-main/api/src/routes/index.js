const { Router }= require('express');
const Recetasrouter = require("./recetas");
const Dietrouter = require("./diet");

const router = Router();


router.use('/', Recetasrouter);
router.use('/', Dietrouter);



module.exports = router;
