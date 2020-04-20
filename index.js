const mongoose = require('mongoose');
const Order = require('./schema/order');

mongoose.connect('mongodb://localhost/Mongoose_project', {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongoose conecting")
});


// 1) Create goods: 
// require('./db/createGoodz');

// 2) Add customer in base:
// require('./db/insertCustom');







const createOrder = new Order({
  date: Date.now(),
  customer_id: "5e97431a12e96456b0f95a65",
  goods_id: "5e970ad025ade53172a91941",
  amount: 60
})

createOrder.save(function(err){
  if(err) throw err;
  console.log('Order created!!!')
})







// Functions
const funcOne = require('./function/task1');
const funcTwo = require('./function/task2');
const funcThree = require('./function/task3');


