'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tshirts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      secondary_color: {
        type: Sequelize.STRING
      },
      collar: {
        type: Sequelize.STRING
      },
      sleeves: {
        type: Sequelize.STRING
      },
      disign_id: {
        type: Sequelize.INTEGER
      },
      logo_position: {
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
      player_number: {
        type: Sequelize.INTEGER
      },
      last_name: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Tshirts');
  }
};
