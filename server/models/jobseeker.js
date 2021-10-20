'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobSeeker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  JobSeeker.init({
    userId: DataTypes.INTEGER,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    question: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobSeeker',
  });
  return JobSeeker;
};