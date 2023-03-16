'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
      Student.hasMany(models.Course, {
        foreignKey: "studentId"
      })
      Student.belongsTo(models.User, {
        foreignKey: "userId"
      })
    }
  }
  Student.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gpa: {
      type: DataTypes.REAL
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Student',
    tableName: "students"
  });
  return Student;
};