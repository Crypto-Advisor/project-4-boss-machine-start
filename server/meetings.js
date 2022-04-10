const express = require('express');

const {
    getAllFromDatabase,
    addToDatabase,
    createMeeting,
    deleteAllFromDatabase,
} = require('./db');

const meetingsRouter = express.Router()
module.exports = meetingsRouter;

meetingsRouter.get('/', (req, res, next) =>{
    const data = getAllFromDatabase('meetings')
    res.send(data)
})

meetingsRouter.post('/', (req, res, next) =>{
    const meeting = addToDatabase('meetings', createMeeting)
    res.status(201).send(meeting)
})

meetingsRouter.delete('/', (req, res, next) =>{
    res.status(204).send(deleteAllFromDatabase('meetings'))
})