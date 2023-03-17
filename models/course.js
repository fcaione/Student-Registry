'use strict';
const {
  Model
} = require('sequelize');
const student = require('./student');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {

    static associate(models) {
      Course.belongsToMany(models.Student, {
        through: models.StudentCourse,
        foreignKey: "courseId"
      })
    }
  }
  Course.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Course',
    tableName: "courses"
  });
  return Course;
};