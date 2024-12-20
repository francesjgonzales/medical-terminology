const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// MongoDB
require('dotenv').config();
const mongoString = process.env.DATABASE_URL

// Mongoose
mongoose.connect(mongoString)
const mongooseDatabase = mongoose.connection

mongooseDatabase.on('error', error => {
    console.log(error)
})

mongooseDatabase.once('connected', () => {
    console.log('Database connected')
})

// Middleware to parse JSON bodies
app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.get('/status', (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});
