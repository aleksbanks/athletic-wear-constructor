'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tshirt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tshirt.belongsTo(models.Order, {
        foreignKey: 'order_id',
        onDelete: 'CASCADE'
      })
    }
  };
  Tshirt.init({
    color: DataTypes.STRING,
    secondary_color: DataTypes.STRING,
    details_color: DataTypes.STRING,
    secondary_details_color: DataTypes.STRING,
    collar: DataTypes.STRING,
    sleeves: DataTypes.STRING,
    disign_id: DataTypes.INTEGER,
    logo_position: DataTypes.INTEGER,
    player_number: DataTypes.INTEGER,
    last_name: DataTypes.STRING,
    size: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tshirt',
  });
  return Tshirt;
};
