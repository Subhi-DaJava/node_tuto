// 19092022 FILE PATH modules
const { default: test } = require('node:test');
const path = require('path');
// Return separate platform
console.log(path.sep); 

// Join Normilase the resulting path
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath); // \content\subfolder\test.txt

//
const base = path.basename(filePath);
console.log(base); // test.txt

// Absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute); // D:\NodeJS_Tutorial\NodeJS-Tuto\content\subfolder\test.txt