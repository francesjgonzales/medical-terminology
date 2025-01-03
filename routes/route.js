const express = require('express');
const router = express.Router();

// Import Controller
const { getAllMedicalTerm } = require('../controller/medicalTermController');

//Post Method
router.post('/', (req, res) => {
    res.send(req.body)
})

//Get all Method
router.get('/', getAllMedicalTerm)



//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;