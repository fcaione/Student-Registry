const Router = require('express').Router()
const controller = require("../controllers/CourseController")

Router.get("/", controller.findAllCourses)
Router.get("/:courseId", controller.findCourseByPk)
Router.post("/create", controller.createCourse)

module.exports = Router;

