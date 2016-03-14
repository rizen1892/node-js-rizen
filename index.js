//var express = require('express')
//var app = express()

//app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))

//app.get('/', function(request, response) {
//response.sendfile('bitstarter.html') 
//});

//app.listen(app.get('port'), function() {
//  console.log("Node app is running at localhost:" + app.get('port'))
//})


var http = require("http");
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log('Connection');
    var path = url.parse(request.url).pathname;

    switch(path){
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write('hello world');
            response.end();
            break;
        case '/bitstarter.html':
            fs.readFile(/home/ubuntu/CMPE172/HW2/bitstarter.html, function(error,data){
                console.log("error: " + error);
                console.log("data: " + data);
                if (error){
                    response.writeHead(404);
                    response.write("oops problem loading this page - 404");
                }
                else{
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(data);
                }

                response.end();
            });
            break;
        default:
            response.writeHead(404);
            response.write("oops this page doesn't exist - 404");
            response.end();
            break;
    }
});



      







