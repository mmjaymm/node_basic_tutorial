var http = require('http');
// var mymodules = require('../builtin_modules/myModules');

http.createServer((request, response) =>
{
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Hello World!');
    response.end();

}).listen(8000);