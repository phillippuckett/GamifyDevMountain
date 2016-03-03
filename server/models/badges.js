var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var badgesSchema = new Schema({
    badgeName: { type: String },
    badgeImage: { type: String },
    desc: { type: String },
    mileStone: { type: String },
    pointValue: {
        type: Object,
        enum: [
            {
                difficulty: 'easy',
                points: 5,
            },
            {
                difficulty: 'medium',
                points: 10,
            },
            {
                difficulty: 'hard',
                points: 20,
            },
            {
                difficulty: 'expert',
                points: 40
            }
        ]
    },
});

module.exports = mongoose.model('badges', badgesSchema);