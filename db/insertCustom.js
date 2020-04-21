const Customer = require('../schema/customer');
const fs = require('fs');

let content = fs.readFileSync('./db/customers.json', 'utf-8')
content = JSON.parse(content);

const insertCustom = Customer.insertMany(content, function(err, docs) {
  if(err) throw err; 
  console.log(docs);
})

module.exports = insertCustom;