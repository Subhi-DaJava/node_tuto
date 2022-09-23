//18092022 19092022
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
//run node app.js

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade');

sayHi('zulfy');
sayHi(names.subhi); // object
sayHi(names.yar);
console.log(data);


//console.log(__dirname)
//console.log(__filename)