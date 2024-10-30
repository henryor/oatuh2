require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passportConfig');
const authRoutes = require('./routes/authRoutes');

const app = express();

//configuracionde midleware de sesiones con llave secreta, el resave cada sessio que tenga este ususario,
//que no haga un reguardado y use el mismo espacio de almacenamiento, saveUninitialized:true que se guarde en una nueva sesion
app.use(session({
    secret: '123456',
    resave:false,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(authRoutes);

app.listen(3000, () => {
    console.log("Esta aplicacion corre por el puerto 3000 y Eileen a dormir.....:)")
});