

var express = require('express'),
	app = express(), 
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);


server.listen(3000);


app.get('/',function(request, response)
{
	response.set('Content-Type', 'text/html');
	response.sendfile(__dirname + "/index.html");
});

//SoCKET function
io.sockets.on('connection',function(socket)
	{
		console.log("Received");
		socket.on('send message',function(data)
			{
				console.log("data >> "+ data);
				io.sockets.emit('new message',data);
				// para todos os usuários da página
				// sockets.broadcast.emit('new message',data); 
			});
	});