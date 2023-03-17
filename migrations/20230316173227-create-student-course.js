"use strict"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("studentcourses", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			studentId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "students",
					key: "id",
				},
				onDelete: "CASCADE"
			},
			courseId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "courses",
					key: "id",
				},
				onDelete: "CASCADE"
			},
			grade: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("studentcourses")
	},
}
