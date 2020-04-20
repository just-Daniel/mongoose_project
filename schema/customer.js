const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: String,
}, {
    versionKey: false
});

customerSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Customer', customerSchema);



// // Example 2
// const customerSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true,
//         validate: async (value) => {
//             try {
//                 const result = await Customer.findOne({ name: value })
//                 if (result) throw new Error("duplicity detected: id :" + value);
//             } catch (error) {
//                 throw new Error(error);
//             }
//         }
//     },
//     address: String,
// }, {
//     versionKey: false
// });

// module.exports = mongoose.model('Customer', customerSchema);
// ==================================================================
// Example 3
// const customerSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true,
//         validate: (value) => {
//             const self = this;
//             const errorMsg = 'Email already in use!';
        
//             return new Promise((resolve, reject) => {
//                 self.constructor.findOne({name: value})
//                 .then(model => model._id ? reject(new Error(errorMsg)) : resolve(true))
//                 .catch(err => resolve(true))
//             })
                
            
//         }
//     },
//     address: String,
// }, {
//     versionKey: false
// });

module.exports = mongoose.model('Customer', customerSchema);
