const { Router }= require('express');
const Recetasrouter = require("./recetas");

const router = Router();


router.use('/', Recetasrouter);



module.exports = router;
