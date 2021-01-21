var formidable = require('formidable');
var http = require('http');
var fs = require('fs');

http.createServer((request, response) =>
{
    if (request.url == '/fileupload')
    {
        var form = new formidable.IncomingForm();

        form.parse(request, function (err, fields, files)
        {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/xampp/htdocs/NODEJS/uploads/' + files.filetoupload.name;

            fs.rename(oldpath, newpath, (error) =>
            {
                if (error) throw error;
                response.write('File uploaded and moved!');
                response.end();
            });
        });
    }
    else
    {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        response.write('<form action="fileupload" method="POST" enctype="multipart/form-data">');
        response.write('<input type="file" name="filetoupload"><br>');
        response.write('<input type="submit">');
        response.write('</form>');
        return response.end();
    }
}).listen(8080);