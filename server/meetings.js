const express = require('express');

const {
    getAllFromDatabase,
    createMeeting,
    addToDatabase,
    deleteAllFromDatabase,
} = require('./db');

const meetingsRouter = express.Router()
module.exports = meetingsRouter;

meetingsRouter.get('/', (req, res, next) =>{
    const data = getAllFromDatabase('meetings')
    res.send(data)
})

meetingsRouter.post('/', (req, res, next) =>{
    res.status(201).send(addToDatabase('meeting',createMeeting()))
})

meetingsRouter.delete('/', (req, res, next) =>{
    res.status(204).send(deleteAllFromDatabase('meeting'))
})