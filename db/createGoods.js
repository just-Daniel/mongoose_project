const Warehouse = require('../schema/warehouse');

const createWarehouse = new Warehouse({
  name: "peach",
  price: 70,
  amount: 8
})

const createGoodz = createWarehouse.save(function(err){
  if(err) throw err;
  console.log('Goods created!!!');
})

module.exports = createGoodz;