'use strict';
const {
  Model
} = require('sequelize');
const student = require('./student');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {

    static associate(models) {
      Course.belongsTo(models.Student, {
        foreignKey: "studentId"
      })
    }
  }
  Course.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    studentId : {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "students",
        key: "id"
      }
    },
    grade: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Course',
    tableName: "courses"
  });
  return Course;
};