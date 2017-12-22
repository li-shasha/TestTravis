/**
 * Created by sli on 12/22/17.
 */
 const  http = require("http");

 http.createServer(function(req, res) {
     res.writeHead(200, {'Content-Type': "text/plain"});
     res.end("hello World!")
 }).listen(8090)

