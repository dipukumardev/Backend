const http = require('node:http');
const server = http.createServer(function (req, res) {
    res.end("hello World");
})

server.listen(3000);