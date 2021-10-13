const http=require("http")//getting local package of nodejs
//setup nodejs server
//requesting server and getting response
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'})
    response.end('Hello world, welcome to nodejs')
}).listen(3001)
