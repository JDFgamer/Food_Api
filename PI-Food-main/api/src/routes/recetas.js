const { Router } = require('express');
const {v4: uuidv4} = require('uuid');
const { Recipe } = require('../db.js');



const router = Router();

router.get('/', (req, res,next) => {
    return Recipe.findAll()
        .then(recipes => res.send(recipes))
        .catch((error) => next(error));
})

router.get('/:id', (req, res,next) => {
    const id = req.params.id;
    return Recipe.findByPk(id)
        .then(recipe => res.send(recipe))
        .catch((error) => next(error));
})

router.post('/', (req, res,next) => {
    const recipe = req.body;
    return Recipe.create({
        ...recipe,
        id: uuidv4(),
        
    })
        .then((recipes) => res.send(recipes))
        .catch((error) => next(error));
})

router.put('/:id', (req, res,next) => {
    const id = req.params.id;
    const recipe = req.body;
    return Recipe.update(recipe, {
        where: { id,
        }
    }).then((updateRecipe)=>{
        res.send(updateRecipe)
    }).catch((error) => next(error));
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    return Recipe.destroy({
        where: { id,
        }
    }).then(()=>{
        res.sendStatus(200)
    }).catch((error) => next(error));
})

module.exports = router;