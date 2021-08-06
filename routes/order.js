const express = require('express');
const router = express.Router();
const { Order } = require('../db/models/order')
const { Tshirt } = require('../db/models/tshirt')
const { Socks } = require('../db/models/socks')
const { Shorts } = require('../db/models/shorts')

router.post('/', (req, res) => {
  const { username, phone, email, comment, orderItems } = req.body;
  const logo = orderItems[0][0].logo //от первого добавленного игрока
  const price = orderItem[0].length * (localStorage.length - 1) // ?????? количество игрков умножить на футболки, шорты и носки
  const order = Order.create(logo, price, email, phone, username, comment )
  const order_Id = order.id
  //общий для каждой футболки 
  // const template = color: orderItems[1].color; secondary_color: orderItems[1].secondary_color; collar: orderItems[1].collar; sleeves: orderItems[1].sleeve; 
  // const allTshirt = []
  // for (let i = 0; orderItems[0].length; i++) {

  // }  
  
  
  const tshirts = Tshirt.bulkInsert(allTshirt, )
  const shorts = Shorts.bulkInsert([{}])
  const socks = Socks.bulkInsert([{}])
})

module.exports = router
