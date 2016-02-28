var badges = require('./../models/badges.js');

module.exports = {
    
    /** C */
    createBadge: function (req, res) {
        badges.create(req.body, function (err, createBadge) {
            if (err) { console.error(err); return res.status(500).json(err); }
            else { res.status(200).json('Badge Added!', createBadge); }
        })
    },
    
    /** R */
    getBadge: function (req, res) {
        badges.find(req.query).populate('users').exec(function (err, readBadge) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Badge Data Retrieved!', readBadge); }
        })
    },
        
    /** U */
    updateBadge: function (req, res) {
        badges.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateBadge) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Badge Updated!', updateBadge); }
        })
    }, 
    
    /** D */
    deleteBadge: function (req, res) {
        badges.findByIdAndRemove(req.query.id, function (err, deleteBadge) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Badge Deleted!', deleteBadge); }
        })
    },
};