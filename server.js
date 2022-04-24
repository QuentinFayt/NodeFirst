const http = require ("http");

function mountServer( callback, port= 8555){
    http.createServer(callback).listen(port);
}

exports.mountServer = mountServer;