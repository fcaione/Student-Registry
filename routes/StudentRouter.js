const Router = require('express').Router()
const controller = require("../controllers/StudentController")

Router.get("/", controller.findAllStudents)
Router.post("/create/:userId", controller.createStudent)
Router.get("/:studentId", controller.findStudentByPk)

module.exports = Router;

