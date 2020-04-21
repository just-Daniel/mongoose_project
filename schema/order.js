const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    date: { type: Date, default: Date.now },
    customer_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Customer'
    },
    goods_id: [{
        type: Schema.Types.ObjectId, 
        ref: 'Warehouse'
    }],
    amount: Number

}, {
    versionKey: false
});

module.exports = mongoose.model('Order', orderSchema);