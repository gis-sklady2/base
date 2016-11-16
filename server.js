var express = require('express');
var http = require('http');

var app = express();


app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

/*
app.set('port', 4000);
app.set('ip','localhost');*/
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

// toto je pokus cislo 1
http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('ip') +':'+ app.get('port'));
});
  

app.get('/', function (req, res, next) {
	res.render('index');
});