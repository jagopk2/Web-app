const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const path = require('path');
const publicPath = path.join(__dirname,'../Public');

console.log(__dirname+'./../Public');
console.log(publicPath);

var app = express();
app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket)=>{
    console.log('The Client has Connected');
    socket.on('disconnect',()=>{
        console.log('The Client has Disconnected');
    });
});


app.get('/',(req,res)=>{
    
});

server.listen(3000,()=>{
    console.log('The Server has Started');
});