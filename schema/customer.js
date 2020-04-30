const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var customerSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    address: String
  }, {
      versionKey: false
  }
);

customerSchema.method('showFullInfo', function(){
  return (' Name: ' + this.name + 
  ',\n Address: ' + this.address);
})

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
