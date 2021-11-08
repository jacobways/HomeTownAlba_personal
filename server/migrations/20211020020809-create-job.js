"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      companyId: {
        type: Sequelize.INTEGER,
      },
      companyName: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.DECIMAL(15, 13),
      },
      longitude: {
        type: Sequelize.DECIMAL(15, 12),
      },
      day: {
        type: Sequelize.JSON,
      },
      startTime: {
        type: Sequelize.TIME,
      },
      endTime: {
        type: Sequelize.TIME,
      },
      time: {
        type: Sequelize.INTEGER,
      },
      position: {
        type: Sequelize.STRING,
      },
      hourlyWage: {
        type: Sequelize.INTEGER,
      },
      monthlyWage: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Jobs");
  },
};
