/**
 * Created by dossorio on 13/05/2014.
 */

var mongoose = require('mongoose');

var tankSchema = mongoose.Schema({
    name: String,
    colour: String,
    pos: { x: Number, y: Number }
});

module.exports = mongoose.model('Tank', tankSchema);
