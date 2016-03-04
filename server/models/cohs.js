var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cohortsSchema = new Schema({
    cohortName: { type: String },
    location: { type: String },
    curriculum: { type: mongoose.Schema.Types.ObjectId, ref: 'curriculums' }
});

module.exports = mongoose.model('cohorts', cohortsSchema);