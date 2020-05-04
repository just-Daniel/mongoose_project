// const Goodz = require('./schema/warehouse');

// function saveToDb () {
//     var doc = docArray.pop();

//     doc.save(function(err, saved){
//       if (err) throw err;//handle error
  
//       result.push(saved[0]);
  
//       if (--total) saveAll();
//       else // all saved here
//     })
// }
//==========================================================
// const Warehouse = require('./schema/warehouse');


// let docArray = [{ name: 'cherry', price: '433', amount: '2' }, { name: 'lime', price: '500', amount: '5' }];

// let total = docArray.length;
// let result = [];

// function saveAll(){
//   var doc = docArray.pop();
//     console.log('doc', doc);
//   Warehouse.save(function(err, saved){
//     if (err) throw err;//handle error

//     result.push(saved[0]);

//     if (--total) {saveAll();}
//     else {}// all saved here////
//   })
// }

// saveAll();
// //======================================================
// const Warehouse = require('./schema/warehouse');


let result = [];
let names = [{ name: 'cherry', price: '433', amount: '2' }, { name: 'lime', price: '500', amount: '5' }];

function saveAll(){
    while( (i = names.shift()) !== undefined ) {
        
        // console.log(i);

        const createWarehouse = new Warehouse({
            name: i.name,
            price: i.price,
            amount: i.amount
        })

        console.log('good', createWarehouse);
          
        createWarehouse.save(function(err){
            if(err) throw err;
            console.log('Goods created!!!');
            result.push(i)
            console.log('result', result);
        })
        
    }
}

saveAll();

//=========================================

const Warehouse = require('./schema/warehouse');

module.exports = function saveAll(){
  console.log('object', goodsArr)
    Warehouse.insertMany(goodsArr, function(err, docs) {
      if(err) { //throw err; 
          console.log('err', err);
      } else {
          console.log('docs', docs)
      }
    })
  }
// let docArray = [{ name: 'cherry', price: 433, amount: 2 }, { name: 'lime', price: 500, amount: 5 }];

// function saveAll(){
// console.log('object', docArray)
// console.log('Warehouse', Warehouse);
//   Warehouse.insertMany(docArray, function(err, docs) {
//     if(err) { //throw err; 
//         console.log('err', err);
//     } else {
//         console.log('docs', docs)
//     }
//   })
// }

// saveAll();