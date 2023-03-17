const { StudentCourse, Course} = require("../models")

const findAllStudentCourses = async (req, res) => {
	try {
		const studentCourse = await StudentCourse.findAll()
		res.status(200).send(studentCourse)
	} catch (error) {
		res.status(401).send(error)
	}
}

const assignStudent = async (req, res) => {
	try {
		const { studentId, courseId, grade } = req.body
		const studentCourse = await StudentCourse.create({
			studentId: parseInt(studentId),
			courseId: parseInt(courseId),
			grade: (grade),
		})
		res.status(200).send(studentCourse)
	} catch (error) {
		res.status(401).send(error)
	}
}

module.exports = {
	assignStudent,
	findAllStudentCourses,
}
