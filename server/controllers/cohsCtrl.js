var cohorts = require('./../models/cohs.js');

module.exports = {
    
    /** C */
    createCohort: function (req, res) {
        cohorts.create(req.body, function (err, createCohort) {
            if (err) { console.error(err); return res.status(500).json(err); }
            else { res.status(200).json('Cohort Added!', createCohort); }
        })
    },

    /** R */
    getCohort: function (req, res) {
        cohorts.find(req.query).populate({path: 'cohortCurriculum', populate: {path: 'deck', model: 'cards', populate: {path: 'badges', model: 'badges', populate: {path: 'category', model: 'categories'}}}}).exec(function (err, readCohort) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Cohort Data Retrieved!', readCohort); }
        })
    },

    /** U */
    updateCohort: function (req, res) {
        cohorts.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCohort) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Cohort Updated!', updateCohort); }
        })
    }, 

    /** D */
    deleteCohort: function (req, res) {
        cohorts.findByIdAndRemove(req.query.id, function (err, deleteCohort) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Cohort Deleted!', deleteCohort); }
        })
    },
};