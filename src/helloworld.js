/**
 * Created by sli on 12/22/17.
 */
 const  http = require("http");
 const chalk = require("chalk");

 http.createServer(function(req, res) {
     res.writeHead(200, {'Content-Type': "text/plain"});
     res.end("hello World!")
 }).listen(8090)


console.log(chalk.blue('hello world!!'))

console.log(chalk.red('hello world!!'))
