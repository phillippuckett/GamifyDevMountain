var users = require('./../models/users.js');
// var Cohort = require('./../models/cohorts.js');
// var Curriculum = require('./models/cohorts.js');
// var Category = require('./../models/categories.js');
// var Card = require('./../models/cards.js');

module.exports = {

    /** C */
    createUser: function (req, res) {
        console.log('USERSCTRL:', req.body);
        users.create(req.body, function (err, createUser) {
            if (err) {
                console.error(err);
                return res.status(500).json(err);
            }
            res.status(200).json('CREATEUSER:', createUser);
        })
    },

    /** R *//* getUserCohort *//* getUserBadgeNumber */
    getUser: function (req, res) {
        users.findOne({ _id: req.user._id })
            .populate({ path: 'cohort', 
            populate: ({ path: 'curriculum', model: 'curriculums', 
            populate: ({ path: 'card', model: 'cards',
            populate: ([{ path: 'category', model: 'categories'},{path: 'badges', model: 'badges'}]            
            )})})})
            .exec(function (err, readUser) { 
                if (err) { res.status(500).send(err); 
                } 
            else { res.status(200).send('GETUSER', readUser); 
            } 
            })
    },
        
    /* getUserTrophyNumbers */

    /** R */
    getCurrentUser: function (req, res) {
        if (!req.user) res.status(401).send('Current User Undefined');
        res.status(200).json(req.user);
    }, 

    /** U */
    updateUser: function (req, res, next) {
        users.findByIdAndUpdate(req.params._id, req.body, function (err, updateUser) {
            if (err) next(err);
            res.status(200).send('UPDATEUSER', updateUser);
        })
    },

    /** D */
    deleteUser: function (req, res) {
        users.findByIdAndRemove(req.query.id, function (err, deleteUser) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send('DELETEUSER', deleteUser);
            }
        })
    },

    getInformation: function (req, res) {
        //change to req.user._id
        users.findById("56d093376629e38018ec0901").populate({
            path: 'cohort'
            , populate: {
                path: 'cohortCurriculum'
                , model: 'curriculums'
                , populate: {
                    path: 'deck'
                    , model: 'cards'
                    , populate: {
                        path: 'badges'
                        , model: 'badges'
                        , populate: {
                            path: 'category'
                            , model: 'categories'
                        }
                    }
                }
            }
        }).exec(function (err, result) {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
    },
    
    getStudentInfo: function (req, res) {
        //change to req.user._id
        users.findById("56d093376629e38018ec0901").populate({
            path: 'cohort'
            , populate: {
                path: 'cohortCurriculum'
                , model: 'curriculums'
                , populate: {
                    path: 'deck'
                    , model: 'cards'
                    , populate: {
                        path: 'badges'
                        , model: 'badges'
                        , populate: {
                            path: 'category'
                            , model: 'categories'
                        }
                    }
                }
            }
        }).exec(function (err, result) {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
    },

    requestBadge: function (req, res) {
        //change to req.user._id
        users.findById("56d093376629e38018ec0901", function (err, result) {
            if (err) {
                res.send(err)
            } else {
                if (result.badgesRequested.indexOf(req.params.badge) === -1) {
                    var badges = result.badgesRequested;
                    badges.push(req.params.badge);
                    users.findByIdAndUpdate("56d12aa81322471f3cf604e6", {
                        badgesRequested: badges
                    }, function (err1, result1) {
                        if (err1) {
                            res.send(err1)
                        } else {
                            res.send(result1)
                        }
                    })
                } else {
                    res.send(result)
                }
            }
        })
    },

    getStudentsByCohort: function (req, res) {
        users.find({
            cohort: req.params.cohort
            , role: 'Student'
        }).populate({ path: 'badgesRequested' }).exec(function (err, result) {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
    },

    badgeApproval: function (req, res) {
        users.findById(req.body.student, function (err, result) {
            if (err) { res.send(err) }
            else {
                var student = result;
                student.badgesRequested.splice((student.badgesRequested.indexOf(req.body.badge)), 1);
                student.badgesAwarded.push(req.body.badge);
                student.earnedPoints += req.body.points;
                users.findByIdAndUpdate(req.body.student, student, function (err1, result1) {
                    if (err1) {
                        res.send(err1)
                    } else {
                        res.send(result1)
                    }
                })
            }
        })
    },

}