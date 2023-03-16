const { Student } = require("../models")

const findAllStudents = async (req, res) => {
	try {
		const students = await Student.findAll()
		res.status(200).send(students)
	} catch (error) {
		res.status(401).send(error)
	}
}

const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body)
    res.status(200).send(student)
  } catch (error) {
		res.status(401).send(error)
  }
}

module.exports = {
  findAllStudents,
  createStudent
}