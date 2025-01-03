require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const connectMongoose = require('./server/config/mongoose')
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;

// Connect to Mongoose
connectMongoose();

// Add flash message
/* const { flash } = require('express-flash-message') */
const flash = require('connect-flash');
const session = require('express-session')

/* For DATABASE - used Nodejs middleware */
app.use(express.urlencoded({ extended: true }))
// DATABASE - Middleware to parse JSON bodies
app.use(express.json());

// this adds the override PUT and DELETE data
const methodOverride = require('method-override')
app.use(methodOverride('_method')) // adds the method-override middleware

// Loads static files - css, js, images
app.use(express.static(__dirname + '/public'));

// Templating Engine
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// Express Session for flash message
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        }
    })
);

// Router
app.use('/', require('./server/routes/medical'))

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

