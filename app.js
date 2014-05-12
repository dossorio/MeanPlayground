/**
 * Created by dossorio on 28/04/2014.
 */
var express = require('express');
var app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    mongoose = require('mongoose');

//Schema & DB access
mongoose.connect('mongodb://localhost/tanks');

var tankSchema = mongoose.Schema({
    name: String,
    colour: String,
    pos: { x: Number, y: Number }
});

var tank = mongoose.model('Tank', tankSchema);

//App config
app.configure(function () {
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

//Sockets config
io.sockets.on('connection', function (socket) {
    socket.on('msg sent', function (data) {
        socket.broadcast.emit('msg broadcast', data);
    });
});

server.listen(8888);
console.log('Listening at 8888, try http://localhost:8888');

//routes
app.get('/tanks', function (req, res) {

    tank.find(function (err, tanks){

        if (err) res.send(err);

        res.json(tanks);
    });
});

app.post('/tanks', function (req, res){

    tank.create({
        name: req.body.name
    }, function (err, tank){

        if (err) res.send(err);

        tank.find(function (err, tanks){
            if (err) res.send(err);
            res.json(tanks);
        });
    });
});
