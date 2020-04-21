const Customer = require('../schema/customer');

const findCustom = Customer.findOne({ name: 'Silpo' }, function(err, answer){
  if(err) throw err;
  console.log(answer);
});

module.exports = findCustom;