const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const EmergencyController = require('./controllers/EmergencyController');
const MedSheet = require('./controllers/MedSheetController')

routes.post('/emergency', EmergencyController.store);
routes.post('/medsheet', MedSheet.store);
routes.post('/user', UserController.store);
module.exports = routes;

