const Customer = require('../schema/customer');
const Order = require('../schema/order');

// module.exports = Order.findOne({amount: 50}).populate('customer_id').exec((err, res) => {
// // module.exports = Order.findOne({amount: 50})
// //     .populate({ path: 'customer_id', select: 'name -_id'})
//     // .exec((err, res) => {
//     if (err) throw err;
//     console.log('res', res);
//     console.log(res.showFullInfo());
// })


//  ======= V2 ======
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


// const orderInfo = () => {
//     Customer.findOne({name: 'Fora'}, (err, custom) => {
//         if (err) throw err;
    
//         Order.find({customer_id: custom._id}).populate('customer_id').exec((err, order) => {
//             if (err) throw err;
//             console.log(order);

//             for(i = 0; i < order.length; i++){
//                 if(order){
//                     console.log(' Name: ' + i.customer_id + 
//                     ',\n Date: ' + order.date + 
//                     ',\n Amount: ' + order.amount);
//                 }
//             }
//             console.log('order', order[0].amount)
//         })
//     })
// }
// orderInfo();

// module.exports = orderInfo;