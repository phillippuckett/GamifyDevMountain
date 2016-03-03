var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardsSchema = new Schema({
    trophyTitle: { type: String },
    trophyImage: { type: String },
    badges: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'badges' }], default: [] },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    trophyLevels: {
        bronze: { type: Number, default: 33 },
        silver: { type: Number, default: 66 },
        gold: { type: Number, default: 99 }
    }
});

module.exports = mongoose.model('cards', cardsSchema);

/** what about pulling other data from 'category' through this model? */