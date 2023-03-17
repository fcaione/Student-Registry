const Router = require('express').Router()
const controller = require("../controllers/UserController")

Router.post("/login", controller.signIn)
Router.post("/create", controller.register)

module.exports = Router;

