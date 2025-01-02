require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts')
const connectMongoose = require('./server/config/mongoose')

const app = express();
const port = process.env.PORT || 10000;
const cors = require('cors'); //cross browser

/* For DATABASE - used Nodejs middleware */
app.use(express.urlencoded({ extended: true }))
// DATABASE - Middleware to parse JSON bodies
app.use(express.json());

// Connect to Mongoose
connectMongoose();

app.use(cors());

// Loads static files - css, js, images
app.use(express.static(__dirname + '/public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Router
app.use('/', require('./server/routes/medical'))

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

