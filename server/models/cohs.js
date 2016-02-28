var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cohortsSchema = new Schema({
    cohortName: { type: String },
    cohortId: { type: Number },
    cohortLocation: { type: String },
    cohortCurriculum: { type: mongoose.Schema.Types.ObjectId, ref: 'curriculums' }
});

module.exports = mongoose.model('cohorts', cohortsSchema);