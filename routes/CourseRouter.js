const Router = require('express').Router()
const controller = require("../controllers/CourseController")

Router.get("/", controller.findAllCourses)
Router.post("/create", controller.createCourse)

module.exports = Router;

