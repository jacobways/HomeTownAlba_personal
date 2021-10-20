'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      period: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.STRING
      },
      hourlyWage: {
        type: Sequelize.INTEGER
      },
      monthlyWage: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jobs');
  }
};