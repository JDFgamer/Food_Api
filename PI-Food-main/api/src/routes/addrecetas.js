const { Router }= require('express');



const router = Router();

router.get('/', (req, res) => {
    res.send("soy la ruta de addReceta");
})

module.exports = router;