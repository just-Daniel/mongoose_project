const Customer = require('../schema/customer');

const findCustom = Customer.findOne({ name: 'Silpo' }, function(err, res){
  if(err) throw err;
  console.log(res.showFullInfo());
});

module.exports = findCustom;