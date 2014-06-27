var http = require('http');

http.createServer( function(request, response)
{
	response.writeHead(200);
	response.write("Hello world 2");
	console.log(request.url);
	response.end();
}).listen(8080);

console.log("Listening on port 8080...");
