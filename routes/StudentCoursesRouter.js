const Router = require('express').Router()
const controller = require("../controllers/StudentCourseController")

Router.get("/", controller.findAllStudentCourses)
Router.post("/create", controller.assignStudent)


module.exports = Router;