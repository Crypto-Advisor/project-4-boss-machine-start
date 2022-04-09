const express = require('express')

const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteAllFromDatabase,
    deleteFromDatabasebyId
} = require('./db');

const minionsRouter = express.Router()
module.exports = minionsRouter;

minionsRouter.param('minionId', (req, res, next, Id)=>{
    const minion = getFromDatabaseById('minions', Id)
    if(minion){
        req.minionId = Id
        next()
    } else{
        res.status(404).send()
    }

})

minionsRouter.get('/', (req, res, next) =>{
    res.send(getAllFromDatabase('minions'));
})

minionsRouter.post('/', (req, res, next) =>{
    const minion = addToDatabase('minions', req.body)
    res.status(201).send(minion)
})

minionsRouter.get('/:minionId', (req, res, next) =>{
    res.send(getFromDatabaseById('minions', req.minionId))
})

minionsRouter.put('/:minionId', (req, res, next) =>{
    res.send(updateInstanceInDatabase('minions', req.body))
})

minionsRouter.delete('/:minionId', (req, res, next) =>{
    const deletedMinion = deleteFromDatabasebyId('minons', req.minionId)
    if(deletedMinion){
        res.status(204).send()
    } else{
        res.status(500).send()
    }
    
})

