const express = require('express');
const router = express.Router();
const medicalController = require('../controller/medicalTermController')


//Post Method
router.post('/', (req, res) => {
    res.send(req.body)
})

//Get all Method
router.get('/', medicalController.getAllMedicalTerm)

router.get('/getOne/:id', medicalController.getOneMedicalTerm)

router.post('/update/:id', medicalController.updateOneMedicalTerm)

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;