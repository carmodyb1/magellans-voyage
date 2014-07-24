var express = require('express');
var controller = require("./controllers/index-controller.js")

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', controller.index);

app.get('/', )

var server = app.listen(5888, function() {
	console.log('Express server listening on port ' + server.address().port);
});
