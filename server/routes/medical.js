const express = require('express');
const router = express.Router();
const medicalController = require('../controller/medicalTermController')

// GET
router.get('/', medicalController.getAllMedicalTerm)
router.get('/view/:id', medicalController.viewOneMedicalTerm)

// POST 
router.get('/add', medicalController.addMedicalTerm)
router.post('/', medicalController.postMedicalTerm)

// EDIT
router.get('/edit/:id', medicalController.editMedicalTerm)
router.put('/edit/:id', medicalController.editPostMedicalTerm)


// DELETE
router.delete('/edit/:id', medicalController.deleteMedicalTerm)

// SEARCH
router.post('/search', medicalController.searchMedData)


module.exports = router;