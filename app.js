const express = require('express')
const app = express()
const tasksRouter = require('./app/api/tasks_router').tasksRouter;

app.use('/tasks', tasksRouter)


module.exports = app


