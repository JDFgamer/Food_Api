const { Router } = require('express');
const {getDiets,getDiet} = require('../controllers/diets');



const router = Router();

router.get('/',getDiets )
router.get('/:name',getDiet )


module.exports = router;