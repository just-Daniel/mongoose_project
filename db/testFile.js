const fs = require('fs');
const readline = require('readline');
const Warehouse = require('../schema/warehouse')


let content = fs.readFileSync('./db/goods.json', 'utf8');
content = JSON.parse(content);

// for( i = 0; i < content.length; i++ ){
//     if(!content.length === 0){
//         Warehouse.insertMany(content, function(err, docs) {
//             if (err) throw err;
//             console.log(docs);
//         })
//     } else {
//         console.log('Elemetns not found!')
//     }

// }


const rl = readline.createInterface({
    input: fs.createReadStream('./db/goods.json'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    console.log(`Line from file: ${line}`);
    // Warehouse.insertMany(line, function(err, docs) {
    //     if (err) throw err;
    //     console.log('My docs: ', docs);
    // });

    switch (line) {
        case line:
            console.log('CHECK: ', line);
            Warehouse.insertMany(line, function(err, docs) {
                if (err) throw err;
                console.log('My docs: ', docs);
            });
            break;
        default:
            console.log(`Elements ${line} not found`)
    }
});


module.exports = rl;
