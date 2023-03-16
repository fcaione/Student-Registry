const Router = require('express').Router()
const controller = require("../controllers/StudentController")

Router.get("/", controller.findAllStudents)
Router.post("/create/:userId", controller.createStudent)

module.exports = Router;

