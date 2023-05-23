const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3000;

const appSecret = process.env.appSecret;

app.use(cookieParser());
app.use(session({
    secret: appSecret,
    resave: false,
    saveUninitialized: true,
    proxy: true,
    name: 'sfmc-example-app',
    cookie: {
        secure: true,
        httpOnly: false,
        sameSite: 'none'
    }
}));

const indexRoute = require('./routes/index');
const loginRoute = require('./routes/login');
const callbackRoute = require('./routes/callback');

app.use('/', indexRoute);
app.use('/login', loginRoute);
app.use('/callback', callbackRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});