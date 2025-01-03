const newMedTerm = require('../models/model')
const mongoose = require('mongoose')

exports.getAllMedicalTerm = async (req, res) => {
    try {
        const headers = {
            title: 'Medical Terminology',
            description: 'For educational purpose only'
        }
        const medicalData = await newMedTerm.find({});
        res.render('index', { headers, medicalData })

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

exports.addMedicalTerm = async (req, res) => {
    const headers = {
        title: 'Medical Terminology',
        description: 'For educational purpose only'
    }
    res.render('medical/add', headers)
}

exports.test = async (req, res) => {
    const headers = {
        title: 'Medical Terminology',
        description: 'For educational purpose only'
    }
    try {
        const medicalDataa = await newMedTerm.find({});
        console.log(medicalDataa)
        res.render('medical/test', medicalDataa)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

// GET to edit
exports.editMedicalTerm = async (req, res) => {
    try {
        const headers = {
            title: 'Medical Terminology',
            description: 'For educational purpose only'
        }
        const medicalData = await newMedTerm.findOne({ _id: req.params.id })
        res.render('medical/edit', { medicalData, headers })
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

exports.editPostMedicalTerm = async (req, res) => {
    console.log(req.body);
    // edit the Mongoose data
    try {
        await newMedTerm.findByIdAndUpdate(req.params.id, {
            term: req.body.term,
            definition: req.body.definition,
        });
        await res.redirect('/')
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

exports.viewOneMedicalTerm = async (req, res) => {
    try {
        const medicalData = await newMedTerm.findOne({ _id: req.params.id })
        res.render('medical/view', { medicalData })

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

exports.postMedicalTerm = async (req, res) => {
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

// Delete Customer
exports.deleteMedicalTerm = async (req, res) => {
    try {
        const deleteTerm = await newMedTerm.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}


