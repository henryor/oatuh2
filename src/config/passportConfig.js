const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'


}, function(accesToken, refreshToken, profile, cb){
    return cb(null, profile);
}));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
   

}, function(accesToken, refreshToken, profile, cb){
    return cb(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);

});

passport.deserializeUser((obj, done) => {
    done(null, obj);

});

module.exports = passport;