const Order = require('../schema/order');
const Customer = require('../schema/customer');
const Warehouse = require('../schema/warehouse');

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
  
const nameCustom = 'Novus';
const nameGoods = 'lime';
const amountGoods = 300;

const myFunc = Customer.find({name: nameCustom}, function(err, custom){
  if(err) throw err;
  console.log(custom)
  
  Warehouse.find({name: nameGoods}, function (err, goods){
      if(err) throw err;
      goods = goods.map(item => item.id);
      console.log(goods);
    
    
    const createOrder = new Order({
      date: Date.now(),
      customer_id: custom[0]._id,
      goods_id: goods,
      amount: amountGoods
    })
      
    createOrder.save(function(err){
      if(err) throw err;
      console.log('Order created!!!')
    })
  })
});
  


module.exports = myFunc;