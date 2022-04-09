const express = require('express');

const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteAllFromDatabase,
    deleteFromDatabasebyId
} = require('./db');

const ideasRouter = express.Router()
module.exports = ideasRouter

ideasRouter.param('ideaId', (req, res, next, id) =>{
    const idea = getFromDatabaseById('ideas', id)
    if(idea){
        req.ideaId = id
        next()
    } else{
        res.status(404).send()
    }
})

ideasRouter.get('/', (req, res, next) =>{
    res.send(getAllFromDatabase('ideas'));
})

ideasRouter.post('/', (req, res, next) =>{
    const idea = addToDatabase('ideas', req.body)
    res.status(201).send(idea)
})

ideasRouter.get('/:ideaId', (req, res, next) =>{
    res.send(getFromDatabaseById('ideas', req.ideaId))
})

ideasRouter.put('/:ideaId', (req, res, next) =>{
    res.send(updateInstanceInDatabase('ideas', req.body))
})

ideasRouter.delete('/:ideaId', (req, res, next) =>{
    const deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaId)
    if(deletedIdea){
        res.status(204).send()
    } else{
        res.status(500).send()
    }
    
})

