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

minionsRouter.get('/', (req, res, next) =>{
    
})

minionsRouter.post('/', (req, res, next) =>{
    
})

minionsRouter.get('/:minionId', (req, res, next) =>{
    
})

minionsRouter.put('/:minionId', (req, res, next) =>{
    
})

minionsRouter.delete('/:minionId', (req, res, next) =>{
    
})

