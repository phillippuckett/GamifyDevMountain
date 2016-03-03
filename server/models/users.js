var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    userImage: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String, unique: true },
    email: { type: String },
    password: { type: String },
    cohort: { type: mongoose.Schema.Types.ObjectId, ref: 'cohorts' },
    badgesRequested: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'badges' }], default: [] },
    badgesAwarded: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'badges' }], default: [] },
    earnedPoints: { type: Number, default: 0 },
    role: {type: String, enum: ['Student', 'Mentor', 'Admin']},
    watchList: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }], default: [] },
});

usersSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    return next(null, user);
});

usersSchema.methods.verifyPassword = function (reqBodyPassword) {
    var user = this;
    return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('users', usersSchema);