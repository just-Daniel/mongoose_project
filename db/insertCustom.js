const Customer = require('../schema/customer');
const fs = require('fs');

let content = fs.readFileSync('./db/customers.json', 'utf-8')
content = JSON.parse(content);

const insertCustom = function () {
  Customer.insertMany(content, function(err, docs) {
    if(err) {
      if (content) {
        for(i = 0; i < content.length; i++){
          let notPass = content.shift(i);
          insertCustom();
          console.log('Already exist:', notPass);
          break;
        }
      } else { 
        console.log('err', err)
        throw err;
      }
    } else {
      if (docs == 0) {
        console.log('Items already exist')
      } else {
        console.log(docs);
      }
    }
  })
};

insertCustom();

module.exports = insertCustom;
