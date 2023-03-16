const Router = require('express').Router()
const controller = require("../controllers/UserController")

// Router.get("/", controller.findAllStudents)
Router.post("/create", controller.register)

module.exports = Router;

