const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index)
routes.delete('/ongs', IncidentController.delete)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)
//routes.delete('/incidents/all', IncidentController.delete_all)

routes.get('/profile', ProfileController.index)

routes.post('/session', SessionController.create)

module.exports = routes;