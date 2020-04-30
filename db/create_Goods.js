const prompt = require('prompt');
const Warehouse = require('../schema/warehouse');


  const properties = [
    {
        name: 'name',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'price',
        validator: /^[0-9]+$/,
        warning: 'Price must be only numbers'
    },
    {
        name: 'amount',
        validator: /^[0-9]+$/,
        warning: 'Amount must be only numbers'
    }
  ];

const goodsArr = [];

prompt.start();

function readGoodsInfo () {
    prompt.get(properties, function (err, result) {
        if (err) throw err; 
        console.log(result);
        if (result.name === "q") {
            function saveAll(){
                console.log('object', goodsArr)
                  Warehouse.insertMany(goodsArr, function(err, docs) {
                    if(err) throw err; 
                    console.log('Created: ', docs)
                  })
                }
                saveAll();
            return;
        }
        goodsArr.push(result);
        readGoodsInfo();
    });
}
readGoodsInfo();

module.exports = readGoodsInfo;