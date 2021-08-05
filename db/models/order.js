'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Order.hasMany(models.Tshirt, {
      foreignKey: 'order_Id',
    }),
    Order.hasMany(models.Shorts, {
      foreignKey: 'order_Id',
    }),
    Order.hasMany(models.Socks, {
      foreignKey: 'order_Id',
    })
    }
  };
  Order.init({
    logo: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
