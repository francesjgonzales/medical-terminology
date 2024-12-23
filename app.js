const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors'); //cross browser

// Routes for Endpoints
/* const routes = require('./routes/routes');
app.use('/api', routes) */

// Connect to MongoDB via Mongoose
require('dotenv').config();
const mongoString = process.env.DATABASE_URL

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
const medicalTerm = require('./models/model')
app.use(cors());

// CRUD 1 - Read all data using GET response
app.get('/getAll', async (req, res) => {
    try {
        const allMedicalTerm = await medicalTerm.find({});
        res.status(200).json(allMedicalTerm);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// CRUD 2 - Read one data using GET response
app.get('/getAll/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const oneMedicalTerm = await medicalTerm.findById(id);
        res.status(200).json(oneMedicalTerm);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

app.post('/post', async (req, res) => {
    try {
        const allMedicalTerm = await medicalTerm.create(req.body);
        res.status(200).json(allMedicalTerm)

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

app.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const allMedicalTerm = await medicalTerm.findByIdAndUpdate(id, req.body)
        if (!allMedicalTerm) {
            return res.status(404).json({ message: `cant find term` })
        }
        const editMedicalTerm = await medicalTerm.findById(id, req.body)
        res.status(200).json(editMedicalTerm)

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }

})

app.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const allMedicalTerm = await medicalTerm.findByIdAndDelete(id)
        if (!allMedicalTerm) {
            return res.status(404).json({ message: `cant find term` })
        }
        res.status(200).json(allMedicalTerm)

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }

})



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


