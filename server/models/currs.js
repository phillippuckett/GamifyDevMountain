var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var curriculumsSchema = new Schema({
    curriculumTitle: { type: String },
    deck: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cards' }], 
});

module.exports = mongoose.model('curriculums', curriculumsSchema);