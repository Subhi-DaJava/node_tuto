// 25/09/2022
const http = require('http');

const server = http.createServer((req, res)=> { // every request
    console.log('request event');
    res.end('Hello World nodeJS');
});

server.listen(5000, () => {
    console.log('Server listening on port : 5000....'); // run first time and one time 
});
/*
erver listening on port : 5000....
request event
request event
request event
request event
request event
request event
request event
request event
request event*/
/*localhost: 5000
Hello World nodeJS
*/ 
