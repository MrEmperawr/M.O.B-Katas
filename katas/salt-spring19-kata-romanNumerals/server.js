const http = require('http');
const qs = require('querystring');
const calculate = require('./arabic-roman').refineRomanNum;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(calculate(qs.decode(req.url.split('?')[1]).qu));
    console.log(req.url)
    res.end()
}).listen(8080);