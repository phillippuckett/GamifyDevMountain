/** Dependants */
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var cors = require('cors');
var passport = require('passport');
var local = require('passport-local');
var key = require('./server/services/cookie.js');
var LocalStrategy = require('passport-local').Strategy;

/* Controllers */
var badgesCtrl = require('./server/controllers/badgesCtrl');
var cardsCtrl = require('./server/controllers/cardsCtrl');
var catsCtrl = require('./server/controllers/catsCtrl');
var cohsCtrl = require('./server/controllers/cohsCtrl');
var currsCtrl = require('./server/controllers/currsCtrl');
var usersCtrl = require('./server/controllers/usersCtrl');

/** Policies */
var isAuthed = function (req, res, next) {
    if (!req.isAuthenticated())
    return res.status(401).send();
    return next();
    // console.log('Function: isAuthed');
    };

/** Front End Connection */
// var __dirname;

/** Express */
var app = express();

/** Services */
var key = require('./server/services/cookie.js');
require('./server/services/passport.js')(passport);

/** Storage Cookie */
app.use(session({
    secret: key, // Remove from Final Project
    resave: true,
    saveUninitialized: true
}));

/** Passport Application */
app.use(passport.initialize());
app.use(passport.session());

/** Connect to Front-End */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

/** Log In */
app.post('/api/login',
    passport.authenticate('local', {
        failureRedirect: false
    }), function (req, res) {
        // console.log("Not Happening");
        res.send({ Login: true });
        // console.log('Function: authenticate');
    }
);

/** Log Out */
app.get('/api/logout', function (req, res) {
    req.logout();
    return res.redirect('/#/login');
    // console.log('Running Function: logout');
});

/* Users End Points */
app.post('/api/register', usersCtrl.createUser);
app.get('/api/currentUser', usersCtrl.getCurrentUser);
app.get('/api/users', usersCtrl.getUser);
app.put('/api/users/:id', usersCtrl.updateUser);
app.delete('/api/users/:id', usersCtrl.deleteUser);

app.put('/api/users/badgerequest/:badge', usersCtrl.requestBadge);
// app.get('api/users/badgesawarded/:badge', usersCtrl.awardedBadge);
app.get('/api/getUserInfo', usersCtrl.getInformation);
app.get('/api/getStudentsByCohort/:cohort', usersCtrl.getStudentsByCohort);
app.put('/api/badgeApproval', usersCtrl.badgeApproval);

/* Curriculums End Points */
app.post('/api/curriculums', currsCtrl.createCurriculum);
app.get('/api/curriculums', currsCtrl.getCurriculum);
app.put('/api/curriculums/:id', currsCtrl.updateCurriculum);
app.delete('/api/curriculums/:id', currsCtrl.deleteCurriculum);

/* Cohorts End Points */
app.post('/api/cohorts', cohsCtrl.createCohort);
app.get('/api/cohorts', cohsCtrl.getCohort);
app.put('/api/cohorts/:id', cohsCtrl.updateCohort);
app.delete('/api/cohorts/:id', cohsCtrl.deleteCohort);

/* Categories End Points */
app.post('/api/categories', catsCtrl.createCategory);
app.get('/api/categories', catsCtrl.getCategory);
app.put('/api/categories/:id', catsCtrl.updateCategory);
app.delete('/api/categories/:id', catsCtrl.deleteCategory);

/* Cards End Points */
app.post('/api/cards', cardsCtrl.createCard);
app.get('/api/cards', cardsCtrl.getCard);
app.put('/api/cards/:id', cardsCtrl.updateCard);
app.delete('/api/cards/:id', cardsCtrl.deleteCard);

/* Badges End Points */
app.post('/api/badges', badgesCtrl.createBadge);
app.get('/api/badges', badgesCtrl.getBadge);
app.put('/api/badges/:id', badgesCtrl.updateBadge);
app.delete('/api/badges/:id', badgesCtrl.deleteBadge);

/** Connections */
var nodePort = 4000;
app.listen(nodePort, function () {
    console.log('Running nodemon://localhost:' + nodePort);
});

var mongoURI = 'mongodb://localhost:27017/GamifyDevMountain';
mongoose.connect(mongoURI);
mongoose.connection.once('open', function (err) {
    if (err) { throw err; }
    else { console.log('Running ' + mongoURI); }
});
