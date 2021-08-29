const { Router }= require('express');
const AddRecetasrouter = require("./addrecetas");
const Recetasrouter = require("./recetas");
const Aboutrouter = require("./about");

const router = Router();

router.use('/dietas', AddRecetasrouter);
router.use('/recetas', Recetasrouter);
router.use('/about', Aboutrouter);


module.exports = router;
