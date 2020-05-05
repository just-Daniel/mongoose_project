const Order = require('../schema/order'); 
const Goods =  require('../schema/warehouse');
const Custtomer = require('../schema/customer');

const readGoods = () => {
let arr = []; 
    Order.find().populate('customer_id').populate('goods_id').exec((err, res) => {
        if (err) throw err;
        for (i = 0; i < res.length; i++) {
            if (res[i].goods_id.amount > res[i].amount) {
                let total = res[i].goods_id.amount - res[i].amount;
                let result = `${res[i].customer_id.name}, not enough: ${res[i].goods_id.name} ${total}`;
                arr.push(result);
            } else {
                let result = `${res[i].customer_id.name}: "OK"`;
                arr.unshift(result);
            }
        }
        array = arr.join('\n');
        console.log(array);
    })
};
readGoods();

module.exports = readGoods;
