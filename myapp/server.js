const { isObject } = require('util');

var app = require('express')();var http = require('http').createServer(app);const PORT=8080;

http.listen(PORT, ()=> {
    console.log(`listening on *:${PORT}`);
});

isObject.on('connection', (socket) => {
/* socket object may be used to send specific messages to the new connected client */
 console.log('new client connected');
});