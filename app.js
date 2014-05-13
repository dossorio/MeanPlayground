/**
 * Created by dossorio on 28/04/2014.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('./config/config');

//Schema & DB access
mongoose.connect(config.db.url);
var Tank = require(config.path.models + 'tank');

//App config
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());

//Sockets config
io.sockets.on('connection', function (socket) {
    socket.on('msg sent', function (data) {
        socket.broadcast.emit('msg broadcast', data);
    });
});


//routes
var tankRoutes = require(config.path.routes + 'tank')(express.Router());
app.use('/tanks', tankRoutes);

server.listen(config.port);
console.log('Listening at ' + config.port + ', try http://localhost:' + config.port);
