const fs = require('fs');
const readline = require('readline');
const Warehouse = require('../schema/warehouse')


// let content = fs.readFileSync('./db/goods.json', 'utf8');
// content = JSON.parse(content);

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
let array = [];

// const rl = readline.createInterface({
//     input: fs.createReadStream('./db/goods.json'),
//     crlfDelay: Infinity
// });

// rl.question('line', (line) => {
    // console.log(`Line from file: ${line}`); 
    // array.push(line);
    // rl.close();
    // for( i = 0; i < line.length; i++ ){
    //     if(line[0]){
    //         array.push(line[0])
    //         console.log(array)
    //     } else {
    //         rl.close();
    //     }
    // }

    // console.log(array);


    // Warehouse.insertMany(line, function(err, docs) {
    //     if (err) throw err;
    //     console.log('My docs: ', docs);
    // });

    // switch (line) {
    //     case line:
    //         console.log('CHECK: ', line);
    //         Warehouse.insertMany(line, function(err, docs) {
    //             if (err) throw err;
    //             console.log('My docs: ', docs);
    //         });
    //         break;
    //     default:
    //         console.log(`Elements ${line} not found`)
    // }
// });


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What your name?', (answer) => {

    array.push(answer)
    console.log(`Thank you ${answer}`);
    console.log('ARRAY: ', array);
    rl.close();
})



module.exports = rl;
