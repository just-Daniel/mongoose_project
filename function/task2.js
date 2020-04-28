// const Customer = require('../schema/customer');
const Order = require('../schema/order');

// Name, date, amount 

// module.exports = Order.find({}, function(err, res) {
//     if(err) throw err;
//     console.log(res[1])
// })
// let orders = await Customer

module.exports = Order.find({amount: 260}).populate('Customer').exec((err, res) => {
    if (err) throw err;
    console.log(res);
})