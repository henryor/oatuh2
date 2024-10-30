const passport = require('passport'); // Lo que sucede cuando nos autenticamos

exports.googleAuth = passport.authenticate('google', {scope: ['profile', 'email']}); //AUTENTICACION CON GOOGLE 
exports.googleAuthCallback = passport.authenticate('google', {failureRedirect: '/'}); //CALLBACK, redirecciona en caso de error

exports.facebookAuth = passport.authenticate('facebook', {scope: ['email']}); //AUTENTICACION CON GOOGLE 
exports.facebookAuthCallback = passport.authenticate('google', {failureRedirect: '/'}); //CALLBACK, redirecciona en caso de error

exports.redirectHome = (req, res)=> {
    res.redirect(process.env.URL_REDIRECT); //DIRECCIONA AL HOME EN CASO DE AUTENTICACION

};
