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
      foreignKey: 'order_id',
    }),
    Order.hasMany(models.Shorts, {
      foreignKey: 'order_id',
    }),
    Order.hasMany(models.Socks, {
      foreignKey: 'order_id',
    })
    }
  };
  Order.init({
    logo: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    name: DataTypes.STRING,
    comment: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
