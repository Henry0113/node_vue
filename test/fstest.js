const fs = require('fs');
const util = require('util');

fs.readFile('test.json', 'utf-8', (err, data) => {
    if (err) return util.log(err);
    util.log("data>>", data);

});

console.log("------------------!!");


let data2 = fs.readFileSync('test.json', 'utf-8');
util.log("data2>>", data2);
console.log("==================");

