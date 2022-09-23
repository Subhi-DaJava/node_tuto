// 21092022 et 22092022 HTTP modules 
const http = require('http');
// Create a server, req=request, res=response
const server = http.createServer((req, res) => {
    //console.log(req); // show all properties of request objects, server is wating our request
    if(req.url === '/') {
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about') {
        res.end('Here is our short history');
    }
    //res.write('Welcome to our home page'); // this message show on the page at localhost:5000, resource does not exist
    
    else {
    res.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);

    res.end();
    }
});

// listen port
server.listen(5000)