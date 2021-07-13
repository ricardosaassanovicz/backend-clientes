const express = require('express')
const ClienteController = require('./controllers/ClienteController')

const routes = express.Router()

routes.get('/clientes', ClienteController.lista)
routes.post('/clientes', ClienteController.salvarNovo)
routes.put('/clientes', ClienteController.salvarEdicao)
routes.get('/cliente/:_id', ClienteController.editar)
routes.delete('/cliente/:_id', ClienteController.deletar)

module.exports = routes
