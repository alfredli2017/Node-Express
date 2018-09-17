var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

//首页
app.get('/', function(req, res) {
	res.type('text/plain');
	res.send('Meawlark travel');
});

//关于
app.get('/about', function(req, res) {
	res.type('text/plain');
	res.send('About Meawlark travel');
});

//定制404页面
app.use(function(req, res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 not found');
});


//定制500页面
app.use(function(err, req, res, next) {
	console.log(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 server error');
});

app.listen(app.get('port'), function() {
	console.log('express started on port:' + app.get('port') + ' and press ctrl+c to terminate');
});
