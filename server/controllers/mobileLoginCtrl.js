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
        console.log(token);
        users.findById(jwt.decode(req.header('token'), key.secret)._id, function(err, user){
            if(err){res.send(err)}
            else{
                console.log('user :', user);
                res.send(user);
            }
        })
    },
    
    getStudentInfo: function(req, res){
        console.log(jwt.decode(req.header('token'), key.secret));
        users.findById(jwt.decode(req.header('token'), key.secret)._id)
            .populate({path: 'badgesAwarded'})
            .populate({
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
        //change to req.user._id
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
    
    
    
}