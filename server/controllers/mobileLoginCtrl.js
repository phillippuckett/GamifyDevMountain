var users = require('./../models/users.js');
var jwt = require('jwt-simple');
var key = require('./../services/cookie.js');

module.exports = {
    
    mobileLogin : function(req, res){
        users.findOne({username: req.body.username}, function(err, user){
            
            if(err){throw err}
            
            if(!user){
                res.send({Login: false, message: 'User Not Found'});
            }
            else if(user){
                
                if(user.verifyPassword(req.body.password) === true){
                    var token = jwt.encode({
                        expiresIn: 86400,
                        _id: user._id,
                    }, key.secret);
                    
                    res.send({
                        Login: true,
                        status: user.role,
                        token: token,
                    });
                }
                
                else{
                    res.send(401);
                }
                
            }
            
        })
    },
    
    mobileTokenCheck : function(req, res){
        var token = jwt.decode(req.header('token'), key.secret);
        users.findById(jwt.decode(req.header('token'), key.secret)._id, function(err, user){
            if(err){res.send(err)}
            else{
                console.log('user :', user);
                res.send(user);
            }
        })
    },
    
    getStudentInfo: function(req, res){
        users.findById(jwt.decode(req.header('token'), key.secret)._id)
            .populate({path: 'badgesAwarded'})
            .populate({
            path: 'cohort'
            , populate: {
                path: 'curriculum'
                , model: 'curriculums'
                , populate: {
                    path: 'deck'
                    , model: 'cards'
                    , populate: {
                        path: 'badges'
                        , model: 'badges'
                    }
                }
            }
        }).exec(function(err, result){
            if(err){res.throw(err)}
            else{
                res.send(result);
            }
        })
    },
    
    requestBadge: function (req, res) {
        users.findById(jwt.decode(req.header('token'), key.secret)._id, function (err, result) {
            if (err) {
                res.send(err)
            } else {
                if (result.badgesRequested.indexOf(req.params.badge) === -1) {
                    var badges = result.badgesRequested;
                    badges.push(req.params.badge);
                    users.findByIdAndUpdate(jwt.decode(req.header('token'), key.secret)._id, {
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
    
    withdrawBadgeRequest: function(req, res){
        users.findById(jwt.decode(req.header('token'), key.secret)._id, function (err, result) {
            if (err) {
                res.send(err)
            } else {
                if (result.badgesRequested.indexOf(req.params.badge) !== -1) {
                    var badges = result.badgesRequested;
                    badges.splice(badges.indexOf(req.params.badge), 1); users.findByIdAndUpdate(jwt.decode(req.header('token'), key.secret)._id, {
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
    
    getStudentByID: function (req, res) {
        //change to req.user._id
        users.findById(req.params.ID).populate({
            path: 'cohort'
            , populate: {
                path: 'curriculum'
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
    
    addToWatchList: function(req, res){
        users.findById(jwt.decode(req.header('token'), key.secret)._id, function(err, user){
            var watchList = user.watchList;
            watchList.push(req.body.student);
            users.findByIdAndUpdate((jwt.decode(req.header('token'), key.secret)._id), {watchList: watchList}, function(err, result){
                if (err) {
                    res.send(err)
                } else {
                    res.send(result)
                }
            })
            
        })
    },
    
    removeFromWatchList: function(req, res){
        users.findById(jwt.decode(req.header('token'), key.secret)._id, function(err, user){
            var watchList = user.watchList;
            watchList.splice(watchList.indexOf(req.body.student), 1);
            users.findByIdAndUpdate((jwt.decode(req.header('token'), key.secret)._id), {watchList: watchList}, function(err, result){
                if (err) {
                    res.send(err)
                } else {
                    res.send(result)
                }
            })
        })
    },
    
}