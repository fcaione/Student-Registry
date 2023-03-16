const { Student, Course } = require("../models")

const findAllStudents = async (req, res) => {
	try {
		const students = await Student.findAll({
			include: [{
        model: Course,
        through: { attributes: []}
      }],
		})
		res.status(200).send(students)
	} catch (error) {
		res.status(401).send(error)
	}
}

const createStudent = async (req, res) => {
	try {
		const studentBody = {
			...req.body,
			userId: req.params.userId
		}
		console.log(studentBody)
		const student = await Student.create(studentBody)
		console.log(student)
		res.status(200).send(student)
	} catch (error) {
		console.log(error)
		res.status(401).send(error)
	}
}

module.exports = {
	findAllStudents,
	createStudent,
}
