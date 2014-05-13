/**
 * Created by dossorio on 09/05/2014.
 */

var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');

var db = require('./config/config');

var port = process.env.PORT || 8080;
mongoose.connect(db.url);

app.configure(function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

require('./app/routes/tank')(app);

app.listen(port);
console.log('Server listening on port: ' + port);
exports = module.exports = app;
