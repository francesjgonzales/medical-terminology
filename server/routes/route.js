const express = require('express');
const router = express.Router();

// Import Controller
/* const { getAllMedicalTerm, getOneMedicalTerm, updateOneMedicalTerm } = require('../controller/medicalTermController'); */
const medicalController = require('../controller/medicalTermController')


//Post Method
router.post('/', (req, res) => {
    res.send(req.body)
})

//Get all Method
router.get('/', medicalController.getAllMedicalTerm)

router.get('/getOne/:id', medicalController.getOneMedicalTerm)

router.post('/update/:id', medicalController.updateOneMedicalTerm)


//Get by ID Method
/* router.get('/getOne/:id', getOneMedicalTerm) */

/* router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
}) */

/* router.put('/update/:id', (req, res) => {
    res.send('Update by ID API')
}) */

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;