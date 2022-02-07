const express = require('express')
const Resources = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Resources.getAll()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Resources.create(req.body)
    .then(newResource => {
        res.status(201).json(newResource)
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router;
