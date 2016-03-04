var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var curriculumsSchema = new Schema({
    curriculumTitle: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' }
});

module.exports = mongoose.model('curriculums', curriculumsSchema);