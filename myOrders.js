const mongoose = require('mongoose');

const Order = require('./schema/order');
const Customer = require('./schema/customer');
const Warehouse = require('./schema/warehouse');

mongoose.connect('mongodb://localhost/Mongoose_project', {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongoose conecting")
});

 