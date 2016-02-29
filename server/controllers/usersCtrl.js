var users = require('./../models/users.js');

module.exports = {
    
    /** C */
    createUser: function (req, res) {
        // console.log(req.body);
        users.create(req.body, function (err, createUser) {
            if (err) {
                console.error(err);
                return res.status(500).json(err);
            }
            res.status(200).json('User Created!', createUser);
        })
    },
    
    /** R */
    getUser: function (req, res) {
        users.find( {} , function (err, readUser) {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send('User Data Retrieved!', readUser);
            }
        })
    },
        
    /** R */
    getCurrentUser: function (req, res) {
        if (!req.user) res.status(401).send('Current User Undefined');
        res.status(200).json(req.user);
    },      
        
    /** U */
    updateUser: function (req, res, next) {
        users.findByIdAndUpdate(req.params._id, req.body, function (err, updateUser) {
            if (err) next(err);
            res.status(200).send('User Updated!', updateUser);
        })
    },   
    
    /** D */
    deleteUser: function (req, res) {
        users.findByIdAndRemove(req.query.id, function (err, deleteUser) {
            if (err) { res.status(500).send(err); }
            else { res.send('User Deleted!', deleteUser); }
        })
    },
    
    getInformation: function(req, res) {
        users.findById("56d093376629e38018ec0901").populate({path: 'cohort', populate: {path: 'cohortCurriculum', model: 'curriculums', populate: {path: 'deck', model: 'cards', populate: {path: 'badges', model: 'badges', populate: {path: 'category', model: 'categories'}}}}}).exec(function(err, result){
            if(err){res.send(err)}
            else{res.send(result)}
        })
    },
    
    requestBadge: function(req, res){
        //change to req.user._id
        users.findById("56d093376629e38018ec0901", function(err, result){
            if(err){res.send(err)}
            else{
                console.log(result);
                res.send(result)
            }
        })
    }
}