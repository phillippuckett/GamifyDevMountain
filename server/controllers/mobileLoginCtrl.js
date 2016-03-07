var users = require('./../models/users.js');
var jwt = require('jsonwebtoken');
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
                    var token = jwt.sign(user, key.secret, {
                        expiresInMinutes: 5
                    });
                    
                    res.send({
                        Login: true,
                        token: token,
                    });
                }
                
                else{
                    res.send(401);
                }
                
            }
            
        })
    }
    
}