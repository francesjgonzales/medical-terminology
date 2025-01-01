require('dotenv').config();
const express = require('express');
const connectMongoose = require('./server/config/mongoose')

const app = express();
const port = process.env.PORT || 10000;
const cors = require('cors'); //cross browser

// To connect index.html - to fix later when folders are organized in MVC
const path = require('path')

// Routes for Endpoints
/* const routes = require('./routes/routes');
app.use('/api', routes) */

// Mongoose database - Refer to controller folder for Application-level middleware that contains CRUD logic
const getAllMedicalTerm = require('./server/routes/route')
app.use('/getAllSubmitted', getAllMedicalTerm)

const getOneMedicalTerm = require('./server/routes/route')
app.use('/getOne/:id', getOneMedicalTerm)

const updateOneMedicalTerm = require('./server/routes/route')
app.use('/update/:id', updateOneMedicalTerm)

// Connect to Mongoose
connectMongoose();

// Middleware to parse JSON bodies
app.use(express.json());
const newData = require('./server/models/model')

app.use(cors());

// Define template paths
const viewsPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')
const publicPath = path.join(__dirname, '/public')

// hbs template engine set up
const hbs = require('hbs')
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set up static directory
app.use(express.static(publicPath))


// Main page
app.get('/', (req, res) => {
    res.render('index')
    /* res.sendFile(__dirname + '/index.html') */
})

/* For DATABASE - used Nodejs middleware, JSON body parser */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// POST - Middleware to validate term length
function validateTerm(req, res, next) {
    const { term, definition } = req.body;
    if (term.length < 4) {
        return res.status(400).json({ message: "Medical Term must be at least 4 characters long." });
    } else if (definition.length < 4) {
        return res.status(400).json({ message: "Definition must be at least 4 characters long." });
    }
    next();
}

// POST Router where data is redirected to main page
app.post('/', validateTerm, (req, res) => {
    try {
        const { term, definition, category } = req.body;
        const newMedTerm = newData({
            term,
            definition,
            category,
        });
        newMedTerm.save();
        /* const allMedicalTerm = await medicalTerm.create(req.body); */
        /* res.status(200).json(newMedTerm) */
        /* res.send('Data submitted successfully') */
        res.redirect('/')

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

// CRUD 2 - Read one data using GET response
app.get('/getOne/:id', async (req, res) => {
    try {
        const oneMedicalTerm = await newData.findById(req.params.id);
        res.status(200).json(oneMedicalTerm);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

app.put('/update/:id', async (req, res) => {
    try {
        const updateMedicalTerm = await newData.findByIdAndUpdate(req.params.id);
        if (!updateMedicalTerm) {
            return res.status(404).json({ message: `cant find term` })
        }
        /* const editMedicalTerm = await newData.findById(req.params.id) */
        res.status(200).json(updateMedicalTerm)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

app.delete('/delete/:id', async (req, res) => {
    try {
        const allMedicalTerm = await newData.findByIdAndDelete(req.params.id)
        if (!allMedicalTerm) {
            return res.status(404).json({ message: `cant find term` })
        }
        const editMedicalTerm = await newData.findByIdAndDelete(req.params.id)
        res.status(200).json(editMedicalTerm)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

