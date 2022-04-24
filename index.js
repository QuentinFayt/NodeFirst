let server = require("./server");
let htmlTemplate = require("./html");

function request(req,ans){
    ans.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
    ans.write(htmlTemplate.html("Homepage"))
    ans.end();
}

server.mountServer(request)