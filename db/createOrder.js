//  --- Does not work ---
const Order = require('../schema/order');
const Customer = require('../schema/customer');
const insertCustom = require('./insertCustom');

// const createOrder = new Order({
//   date: Date.now(),
  // customer_id: "5e97431a12e96456b0f95a65",
// //   customer_id: 'fora._id',
//   goods_id: "5e970ad025ade53172a91941",
//     // goods_id: 'peach'._id,
//   amount: 60
// })

// module.exports = createOrder.save(function(err){
//   if(err) throw err;
//   console.log('Order created!!!')

//     // const customer_id = new Customer({
//     //     name: 'Silpo'
//     // })
    
// })
const createOrder = new Order({
    date: Date.now(),
    customer_id: Aschan._id ,
    goods_id: "5e970ad025ade53172a91941",
    //   goods_id: 'peach'._id,
    amount: 60
  })
  
  module.exports = createOrder.save(function(err){
    if(err) throw err;
    console.log('Order created!!!')
  })
  