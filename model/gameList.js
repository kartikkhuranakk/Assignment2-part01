/**
 * Created by kartik on 2017-03-20.
 */

var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');


var gameListSchema = new mongoose.Schema({
    // empty schema is ok as passport defines username / password automatically
    gameName: {
        type: String,
        required: 'Please enter a name'
    },
    companyName: {
        type: String,
        required: 'Please emter the name of company'
    },




});

accountSchema.plugin(plm);

// make this public
module.exports = mongoose.model('gameList', gameListSchema);