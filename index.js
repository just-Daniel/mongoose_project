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

// 3) Create orders
// require('./db/createOrder');


// Functions
// const funcOne = require('./function/task1');  // working 
const funcTwo = require('./function/task2');
// const funcThree = require('./function/task3');





















// let content = require('./db/testFile');
// console.log('CHECK: ', typeof content);




