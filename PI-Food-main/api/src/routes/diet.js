const { Router } = require('express');
const {postDiet} = require('../controllers');

const router = Router();

router.post('/diet', postDiet)

module.exports = router;