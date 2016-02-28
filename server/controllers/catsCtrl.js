var categories = require('./../models/cats.js');

module.exports = {
    
    /** C */
    createCategory: function (req, res) {
        categories.create(req.body, function (err, createCategory) {
            if (err) { console.error(err); return res.status(500).json(err); }
            else { res.status(200).json('Category Added!', createCategory); }
        })
    },
    
    /** R */
    getCategory: function (req, res) {
        categories.find(req.query).populate('cards').exec(function (err, getCategory) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Category Data Retrieved!', getCategory); }
        })
    },
        
    /** U */
    updateCategory: function (req, res) {
        categories.findByIdAndUpdate(req.query._id, { $set: req.body }, function (err, updateCategory) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Category Updated!', updateCategory); }
        })
    }, 
    
    /** D */
    deleteCategory: function (req, res) {
        categories.findByIdAndRemove(req.query.id, function (err, deleteCategory) {
            if (err) { res.status(500).send(err); }
            else { res.status(200).send('Category Deleted!', deleteCategory); }
        })
    },
};