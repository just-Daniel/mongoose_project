const Customer = require('../schema/customer');
const Order = require('../schema/order');

const orderInfo = () => {
    Customer.findOne({name: 'Fora'}, (err, custom) => {
        if (err) throw err;
    
        Order.findOne({customer_id: custom._id}).populate('customer_id').exec((err, order) => {
            if (err) throw err;
            console.log(order.showFullInfo());
        })
    })
}
orderInfo();

module.exports = orderInfo;
