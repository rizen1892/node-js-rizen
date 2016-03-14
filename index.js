
var fs = require("fs");
var filename = "bitstarter.html";
var buf = fs.readFileSync(filename, "utf8");

function start(resp) {
    resp.writeHead(200, {"Content-type":"text/html"});
    resp.write(buf);
    resp.end();
    }





































/*
var http = require('http');
var fs = require('fs');
  http.createServer(function(req, res){
    fs.readFile('bitstarter.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(process.env.PORT||5000);

 console.log('Listen me at http://localhost:3000');

*/
