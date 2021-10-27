"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init(
    {
      companyId: DataTypes.INTEGER,
      companyName: DataTypes.STRING,
      location: DataTypes.STRING,
      day: DataTypes.JSON,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
      time: DataTypes.INTEGER,
      position: DataTypes.STRING,
      hourlyWage: DataTypes.INTEGER,
      monthlyWage: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );

  return Job;
};
