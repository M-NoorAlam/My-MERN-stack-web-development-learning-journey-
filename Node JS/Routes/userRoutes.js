const express = require("express")

const routes = express.Router();

const UserController = require('../Controller/userController');

routes.post('/api/user', UserController.Users);


module.exports = routes;