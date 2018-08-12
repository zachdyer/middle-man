var http = require('http');

//create a server object:
var server = http.createServer(function (req, res) {
  res.write("Hi! My name is Node JS. But you can call me Node."); //write a response to the client
  res.end(); //end the response
});

server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(3000); //the server object listens on port 8080

