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



// let docArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let total = docArray.length;
// let result = [];

// function saveAll(){
//   var doc = docArray.pop();
//     console.log('doc', doc);
//   doc.save(function(err, saved){
//     if (err) throw err;//handle error

//     result.push(saved[0]);

//     if (--total) {saveAll();}
//     else {}// all saved here////
//   })
// }

// saveAll();

const Warehouse = require('./schema/warehouse');

var names = ["name_1", "price_1", "amount_1", "name_2" ,"price_2", "amount_2"];
let result = [];

function saveAll(){
    while( a = (i = names.shift()) !== undefined ) {
        
        console.log(i);
        // console.log('arr', arr);

        const createWarehouse = new Warehouse({
            name: i,
            price: i,
            amount: i
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