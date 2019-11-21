let  http = require('http');
const url = require('url');

let server = http.createServer(function(req,res) {

const queryObject = url.parse(req.url,true).query;    
console.log('got a request');
console.log(queryObject);
res.write('hello from your webserver');

queryObject.write();

res.end();


});

server.listen(3000);
