// 28/09/2022
var http = require('http');
var fs = require('fs');

http
.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8');
    // res.end(text); 2.1Mb to loan on the page

    const fileSream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileSream.on('open', () => { // readable
    fileSream.pipe(res); // writeable, on the page content-lengh; chunked - en morceau
    });
    fileSream.on('error', (err) => {
        res.end(err);
    })
}).listen(5000);