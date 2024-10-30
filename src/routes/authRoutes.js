const express = require('express');
const app = express.Router();
const authController = require('../controllers/authControllers');

app.get('/auth/google', authController.googleAuth);//mostraar pantalla de autorizar o denegar de google
app.get('/auth/google/callback', authController.googleAuthCallback, authController.redirectHome);

app.get('/auth/facebook', authController.facebookAuth);//mostraar pantalla de autorizar o denegar de google
app.get('/auth/facebook/callback', authController.facebookAuthCallback, authController.redirectHome);

module.exports = app;
