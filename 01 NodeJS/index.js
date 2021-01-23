var express = require('express');
var app = express();

var port = 3000;

app.get('/',function(request, respone) {
	respone.send('Hello các bạn!');
});
app.listen(port,function() {
	console.log('Server listenning on port ' + port);
});