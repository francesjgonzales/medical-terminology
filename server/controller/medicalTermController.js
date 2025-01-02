const newMedTerm = require('../models/model')
const mongoose = require('mongoose')

const getAllMedicalTerm = async (req, res) => {
    const headers = {
        title: 'Medical Terminology',
        description: 'For educational purpose only'
    }
    try {
        const medicalData = await newMedTerm.find({});
        /* res.status(200).json(medicalNewData); */
        res.render('index', { headers, medicalData })

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

/* const getOneMedicalTerm = async (req, res) => {
    try {
        const { id } = req.params;
        const getOneMedTerm = await newData.findById(id);
        res.status(200).json(getOneMedTerm);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const updateOneMedicalTerm = async (req, res) => {
    try {
        const updateOneMedTerm = await newData.findByIdAndUpdate(req.params.id, {
            term: req.body.term,
            description: req.body.description,
        },
            res.status(200).json(updateOneMedTerm))
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
} */

module.exports = {
    getAllMedicalTerm
}

