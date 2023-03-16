const { Course } = require("../models")

const findAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.status(200).send(courses)
  } catch (error) {
		res.status(401).send(error)
  }
}

const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body)
    res.status(200).send(course)
  } catch (error) {
		res.status(401).send(error)
  }
}

module.exports = {
  findAllCourses,
  createCourse
}