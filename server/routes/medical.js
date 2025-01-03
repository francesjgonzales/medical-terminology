const express = require('express');
const router = express.Router();
const medicalController = require('../controller/medicalTermController')

//Get all Method
router.get('/', medicalController.getAllMedicalTerm)
router.get('/view/:id', medicalController.viewOneMedicalTerm)

router.get('/add', medicalController.addMedicalTerm)
router.get('/test', medicalController.test)
router.post('/', medicalController.postMedicalTerm)

router.get('/edit/:id', medicalController.editMedicalTerm)
router.put('/edit/:id', medicalController.editPostMedicalTerm)

router.delete('/edit/:id', medicalController.deleteMedicalTerm)


module.exports = router;