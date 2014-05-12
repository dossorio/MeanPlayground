/**
 * Created by dossorio on 28/04/2014.
 */
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    swig = require('swig'),
    io = require('socket.io').listen(server);

server.listen(8888);

function home(req, res) {
    res.render('index');
}

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('view cache', false);
app.use(express.static(__dirname + "/public"));

swig.setDefaults({cache: false});

io.sockets.on('connection', function (socket) {
    socket.on('msg sent', function (data) {
        socket.broadcast.emit('msg broadcast', data);
    });
});

app.get('/', home);