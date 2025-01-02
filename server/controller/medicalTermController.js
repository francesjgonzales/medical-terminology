const newMedTerm = require('../models/model')
const mongoose = require('mongoose')

const getAllMedicalTerm = async (req, res) => {
    const headers = {
        title: 'Medical Terminology',
        description: 'For educational purpose only'
    }
    try {
        const medicalData = await newMedTerm.find({});
        res.render('index', { headers, medicalData })

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const addMedicalTerm = async (req, res) => {
    const headers = {
        title: 'Medical Terminology',
        description: 'For educational purpose only'
    }
    res.render('medical/add', headers)
}

const getOneMedicalTerm = async (req, res) => {
    const headers = {
        title: 'Medical Terminology',
        description: 'For educational purpose only'
    }
    try {
        const { id } = req.params;
        const getOneMedTerm = await newData.findById(id);
        res.status(200).json(getOneMedTerm);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const postMedicalTerm = async (req, res) => {
    console.log(req.body)

    const addMedicalTerm = new newMedTerm({
        term: req.body.term,
        definition: req.body.definition,
        category: req.body.category
    })
    try {
        addMedicalTerm.save();
        /* await newMedTerm.create(addMedicalTerm); */
        res.redirect('/')
    } catch (error) {
        res.status(500)
        console.log(error)
        throw new Error(error.message)
    }
}

module.exports = {
    getAllMedicalTerm, addMedicalTerm, postMedicalTerm
}

