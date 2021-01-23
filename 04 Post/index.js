var express = require('express');
var bodyParser = require('body-parser'); // set body parser
var userRoute = require('./routes/user.routes.js');

var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) 

app.get('/',function(req, res) {
	res.render('index', {
		name:'AAA'
	});
});
app.use(express.static('public'));

app.use('/users',userRoute);

app.listen(port,function() {
	console.log('Server listenning on port ' + port);
});

 