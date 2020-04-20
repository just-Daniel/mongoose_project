const Customer = require('../schema/customer');

const findCustom = Customer.findOne({ name: 'Auchan' }, function(err, answer){
  if(err) throw err;
  console.log(answer);
});

module.exports = findCustom;