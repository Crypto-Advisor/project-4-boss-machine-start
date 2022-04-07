const express = require('express')

const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteAllFromDatabase,
    deleteFromDatabasebyId
} = require('./db');

const meetingsRouter = express.Router()
module.exports = meetingsRouter;

meetingsRouter.get('/', (req, res, next) =>{
    const data = getAllFromDatabase('meetings')
    res.send(data)
})

meetingsRouter.post('/', (req, res, next) =>{
    addToDatabase('meetings', {
        time: req.time,
        date: req.date,
        day: req.day,
        note: req.note
    })
})

meetingsRouter.delete('/', (req, res, next) =>{
    
})