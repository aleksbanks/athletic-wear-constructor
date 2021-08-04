'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Shorts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      disign_id: {
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.STRING,
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Order",
          key: "id",
          as: "order_id"
        }
      },
      logo_position: {
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
    await queryInterface.dropTable('Shorts');
  }
};
