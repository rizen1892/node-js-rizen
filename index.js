//var express = require('express')
//var app = express()

//app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))

//app.get('/', function(request, response) {
//  response.sendfile('bitstarter.html')
//})

//app.listen(app.get('port'), function() {
//  console.log("Node app is running at localhost:" + app.get('port'))
//})

/*
var http = require ('http');
var fs = require('fs');

http.createServer(function(request,response){
	var url = request.url;
		if(url == '/'){
			getStaticFileContent(response, 'bitstarter.html','text/html');
		}
		else{
		reponse.writeHead(404, {'Content-Type':'text/plain'});
		response.end('Page not found.')
		}
	
}.listen(5000)

function getStaticFileContent(response, filepath, contentType){
	fs.readFile(filepath, function(error, data){
		if(error){
			response.writeHead(500, {'Content-Type':'text/plain'});
			response.end('500 - Internal Server Error.');
		}
		if (data){
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(data);
		}
	});
}	
*/

var http = require('http');
var fs = require('fs');
  http.createServer(function(req, res){
    fs.readFileSync('bitstarter.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(process.env.PORT||5000);
 
 console.log('Listen me at http://localhost:3000');
