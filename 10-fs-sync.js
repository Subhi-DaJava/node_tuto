// 19092022 FS Module : Read from the file 
const { readFileSync, writeFileSync } = require('fs');

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
//console.log(first, second); // 1.before writting : Hello this is the first text file. Hello this is the second text file.
//create the file and write the message inside 
// writeFileSync('./content/result-sync.txt', `Here is the result : ${first} ${second}`);

// create and write
writeFileSync('./content/newResult-sync.txt', `Here is the result : ${first} ${second}`,
{ flag: 'a'}); // object: option

// append the file 
writeFileSync('./content/result-sync.txt', `Here is the result : ${first} ${second}`,
{ flag: 'a' }
); // object: option

console.log('done with this task');
console.log('starting the next one');
/*
start
done with this task  
starting the next one
*/