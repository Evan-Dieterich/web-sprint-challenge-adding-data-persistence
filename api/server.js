//Express Import
const express = require('express');

//Route Imports
const ProjectRouter = require('./project/router');
const TaskRouter = require('./task/router');
const ResourceRouter = require('./resource/router');

//Initialize Express
const server = express();

//Json + Routes
server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TaskRouter);
server.use('/api/resources', ResourceRouter);

//Global Err Middleware
server.use((err, req, res, next) => {
    res.status(500).json({message: err.message, stack: err.stack});
});

server.use('*', (req, res) => {
    res.status(404).send('This resource is unavailable');
});

//Export server
module.exports = server;