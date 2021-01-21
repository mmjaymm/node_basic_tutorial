var http = require('http');
var url = require('url');
http.createServer((request, response) =>
{
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var queryString = url.parse(request.url, true).query;
    var txt = queryString.year + " " + queryString.month;
    response.end(txt);

}).listen(8000);