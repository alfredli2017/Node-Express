var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({ defaultLayout : 'main'});

app.engine('handlebars', handlebars.engine);
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
let fortunes = [
   "one",
   "two",
   "three",
   "four",
   "five",
   "six",
   "seven"
];


//首页
app.get('/', function(req, res) {
	console.log('首页req.url:', req.url);
	/*
	res.type('text/plain');                   //res.type()用来设置响应头Content-Type,等同于res.writeHead(),但是不推荐
	res.send('Meawlark travel');              //res.send()来代替res.end()
	*/

	//将以前的简单文字反馈改为使用handlebars后的视图
	res.render('home');
});

//关于
app.get('/about', function(req, res) {
	console.log('相关页req.url:', req.url);
	/*
	res.type('text/plain');
	res.send('About Meawlark travel');
    */
	var fort = fortunes[Math.floor(Math.random() * fortunes.length)]

	res.render('about', {fortune : fort});
});

//定制404页面
app.use(function(req, res) {                 //同时应该注意,对404和500的处理与上面的不同，用的不是get/post而是use
	//res.type('text/plain');                  //app.use是Express中添加中间件的一种方式,此处可以理解为没有路由匹配路径的处理器
	//res.status(404);
	//res.send('404 not found');
	

	res.status(404);
	res.render('404');
});


//定制500页面
app.use(function(err, req, res, next) {
	console.log(err.stack);
	//res.type('text/plain');
	//res.status(500);
	//res.send('500 server error');
	
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function() {
	console.log('express started on port:' + app.get('port') + ' and press ctrl+c to terminate');
});
