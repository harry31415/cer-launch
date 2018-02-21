var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
//var helmet = require('helmet');

//app.use(helmet());
app.use(express.static(path.join(__dirname, '.')));

app.get('/', function(req, res){
    res.sendFile(__dirname + 'index.html');
});

/*io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});*/


http.listen(4242, function(){
    console.log('listening on *:4242');
});



