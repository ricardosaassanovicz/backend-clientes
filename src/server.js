const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const server = express()

mongoose.connect('mongodb+srv://ricardo:01234567890@cluster01.oj8s0.mongodb.net/db_teste?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(8888)
