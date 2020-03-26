const express = require('express')
const routes = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfilleController = require('./controllers/ProfilleController')
const SessionController = require('./controllers/SessionController')

routes.post('/sessions', SessionController.create)
routes.get('/profile', ProfilleController.index)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes