var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
    categoryTitle: { type: String },
    // card: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cards' }]
});

module.exports = mongoose.model('categories', categoriesSchema);