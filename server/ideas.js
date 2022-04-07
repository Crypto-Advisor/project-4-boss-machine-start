const express = require('express')

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

ideasRouter.get('/', (req, res, next) =>{

})

ideasRouter.post('/', (req, res, next) =>{

})

ideasRouter.get('/:ideaId', (req, res, next) =>{

})

ideasRouter.put('/:ideaId', (req, res, next) =>{

})

ideasRouter.delete('/:ideaId', (req, res, next) =>{

})

