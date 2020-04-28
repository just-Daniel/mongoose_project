const prompt = require('prompt');

const properties = [
    {
        name: 'name',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username must be only letters, spaces, or dashes'
    },
    {
        name: 'price'
    },
    {
        name: 'amount'
    }
];

const goodsArr = [];

prompt.start();

function readGoodsInfo () {
    prompt.get(properties, function (err, result) {
        if (err) throw err; 
        console.log(result);
        if (result.name === "q") {
            
            return;
        }
        goodsArr.push(result);
        readGoodsInfo();
    });
}
readGoodsInfo();


// function onErr(err) {
//     console.log(err);
//     return 1;
// }