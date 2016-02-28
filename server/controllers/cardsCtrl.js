var cards = require('./../models/cards.js');

module.exports = {
    
    /** C */
    createCard: function (req, res) {
        cards.create(req.body, function (err, createCard) {
            if (err) { console.error(err); return res.status(500).json(err); }
            else { res.status(200).json('Card Added!', createCard); }
        })
    },
    
    /** R */
    getCard: function (req, res) {
        cards.find(req.query).populate({ path: 'badges', select: 'badgeImage mileStone pointValue' }).exec(function (err, readCard) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Card Data Retrieved!', readCard); }
        })
    },
        
    /** U */
    updateCard: function (req, res) {
        cards.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCard) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Card Updated!', updateCard); }
        })
    }, 
    
    /** D */
    deleteCard: function (req, res) {
        cards.findByIdAndRemove(req.query.id, function (err, deleteCard) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Card Deleted!', deleteCard); }
        })
    },
};