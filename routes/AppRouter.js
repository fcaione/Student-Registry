const Router = require('express').Router()
const CourseRouter = require("./CourseRouter")
const StudentRouter = require("./StudentRouter")
const UserRouter = require("./UserRouter")

Router.use("/courses", CourseRouter)
Router.use("/students", StudentRouter)
Router.use("/users", UserRouter)

module.exports = Router;