let http = require('http');
let fs = require('fs');

let port = 3004;
let hostname = '127.0.0.1'
let server = http.createServer((req, res) =>{
	if (req.url === '/' || req.url === '/home'){
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/html')	
		fs.creatReadStream('index.html').pipe(res);	
	}else if (req.url === '/about'){
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/html')	
		fs.creatReadStream('index.html').pipe(res);
	}else if (req.url === '/profile'){
		console.log(req.params)
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/html')	
		fs.creatReadStream('index.html').pipe(res);
	}else{
	res.statusCode = 404
	res.setHeader('Content-Type', 'text/html')
	fs.creatReadStream('404.html').pipe(res);
	}
	});

//server.listen(port, hostname, () =>{
//	console.log(`Running in ${hostname}, port ${port}`);
//});
