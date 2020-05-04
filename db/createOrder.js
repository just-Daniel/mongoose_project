const Order = require('../schema/order');
const Customer = require('../schema/customer');
const Warehouse = require('../schema/warehouse');
const prompt = require('prompt');


const properties = [
  {
      name: 'customer',
      validator: /^[a-zA-Z\s\-]+$/,
      warning: 'Username must be only letters, spaces, or dashes'
  },
  {
      name: 'goods',
      validator: /^[a-zA-Z\s\-]+$/,
      warning: 'Goods must be only letters'
  },
  {
      name: 'amount',
      validator: /^[0-9]+$/,
      warning: 'Amount must be only numbers'
  }
];

prompt.start();
  
function readOrderInfo() {
  prompt.get(properties, function (err, result) {
    if (err) throw err;
    if (result.customer === 'q') {
      return;
    }
    Customer.findOne({name: result.customer}, function(err, custom){
      if(err) throw err;
      console.log('Customer: ', custom)
      
      Warehouse.findOne({name: result.goods}, function (err, goods){
          if(err) throw err;
          // goods = goods.map(item => item.id);
          console.log('Goods: ', goods);
        
        
        const createOrder = new Order({
          date: Date.now(),
          customer_id: custom,
          goods_id: goods,
          amount: result.amount
        })
          console.log('CHECK: ', createOrder)
        createOrder.save(function(err){
          if(err) throw err;
          console.log('Order created!!!');
          readOrderInfo();
        })
        
      })
    });
  });
};

readOrderInfo();

function onErr(err){
  if (err === null){
    console.log('Customer not found')
  } else {
    console.log('err', err);
  }
}

module.exports = readOrderInfo;






































// const nameCustom = 'Novus';
// const nameGoods = 'lime';
// const amountGoods = 300;

// const myFunc = Customer.find({name: nameCustom}, function(err, custom){
//   if(err) throw err;
//   console.log(custom)
  
//   Warehouse.find({name: nameGoods}, function (err, goods){
//       if(err) throw err;
//       goods = goods.map(item => item.id);
//       console.log(goods);
    
    
//     const createOrder = new Order({
//       date: Date.now(),
//       customer_id: custom[0]._id,
//       goods_id: goods,
//       amount: amountGoods
//     })
//       console.log('CHECK: ', createOrder)
//     // createOrder.save(function(err){
//     //   if(err) throw err;
//     //   console.log('Order created!!!')
//     // })
//   })
// });
  


// module.exports = myFunc;