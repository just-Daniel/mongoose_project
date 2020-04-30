const Customer = require('../schema/customer');
const Order = require('../schema/order');

// module.exports = Order.findOne({amount: 50}).populate('customer_id').exec((err, res) => {
module.exports = Order.findOne({amount: 50})
    .populate({ path: 'customer_id', select: 'name -_id'})
    .exec((err, res) => {
    if (err) throw err;
    console.log(res.showFullInfo());
})


