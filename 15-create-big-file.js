//28/09/2022 
// Streams : Writeable, Readable, Duplex, Transform 
// Create a big file with the Stream
const { writeFileSync } = require('fs');
for(let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a'}); // flag append
} 