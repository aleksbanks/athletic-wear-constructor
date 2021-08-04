'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shorts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shorts.belongsTo(models.Order, {
        foreignKey: 'order_id',
        onDelete: 'CASCADE'
      })
    }
  };
  Shorts.init({
    color: DataTypes.STRING,
    disign_id: DataTypes.INTEGER,
    logo_position: DataTypes.INTEGER,
    size: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Shorts',
  });
  return Shorts;
};
