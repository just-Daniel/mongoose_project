const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost/Mongoose_project', {
    useNewUrlParser: true
});
mongoose.set('useCreateIndex', true); // Вимикає діпрікейтид на індекс
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongoose conecting")



// 1) Create goods: 
// require('./db/create_Goods');

// 2) Add customer in base:
// require('./db/insertCustom');

// 3) Create orders
// require('./db/createOrder');


// Functions
// const funcOne = require('./function/task1');  // working 
const funcTwo = require('./function/task2');  // working
// const funcThree = require('./function/task3');


});





