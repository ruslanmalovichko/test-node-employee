var http = require('http');

var server = http.createServer().listen(8000);

server.on('request', function(request:Request, response:Response) {
  console.log(request.method);
});
console.log('server listening on 8000');

