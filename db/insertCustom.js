const Customer = require('../schema/customer');
const fs = require('fs');

let content = fs.readFileSync('./db/customers.json', 'utf-8')
content = JSON.parse(content);

const insertCustom = Customer.insertMany(content, function(err, docs) {
  if(err) throw err; 
  console.log(docs);
})

module.exports = insertCustom;

module.exports = Customer.find({}, function(err, docs) {
  if (!err) {
    console.log('CHECK: ', docs);
    console.log('My content: ', content)
    for (i = 0; i < content.length; i++){
      if (content[i] !== docs){
        Customer.insertMany(content, function(err, docs) {
            if(err) throw err; 
            console.log('Good!!! ', docs);
          })
      } else {
        console.log('Name is exist!')
      }
    }
  } else {
    throw err; 
  }
})