const Router = require('express').Router()
const CourseRouter = require("./CourseRouter")
const StudentRouter = require("./StudentRouter")
const UserRouter = require("./UserRouter")
const StudentCoursesRouter = require("./StudentCoursesRouter")

Router.use("/courses", CourseRouter)
Router.use("/students", StudentRouter)
Router.use("/users", UserRouter)
Router.use("/studentcourses", StudentCoursesRouter)

module.exports = Router;