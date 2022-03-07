//global.XMLHttpRequest = require('xhr2');
const {EchoRequest, EchoResponse} = require('./proto-files/web-tutorial_pb.js');
const {EchoServiceClient} = require('./proto-files/web-tutorial_grpc_web_pb.js');

var echoService = new EchoServiceClient('http://localhost:8080');

var request = new EchoRequest();
request.setMessage('Hello World!');

echoService.echo(request, {}, function(err, response) {
	console.log(response);
});