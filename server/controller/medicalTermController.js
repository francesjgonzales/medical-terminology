const newMedTerm = require('../models/model')
const mongoose = require('mongoose')

exports.getAllMedicalTerm = async (req, res) => {
    const message = await req.flash('info')
    try {
        const headers = {
            title: 'Medical Terminology',
            description: 'For educational purpose only'
        }
        const medicalData = await newMedTerm.find({});
        res.render('index', { headers, medicalData, message })

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
    res.render('medical/add', { headers })
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
    // edit the Mongoose data
    try {
        await newMedTerm.findByIdAndUpdate(req.params.id, {
            term: req.body.term,
            definition: req.body.definition,
            category: req.body.category,
        });
        /*         await req.flash('info', 'Term edited') */
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

    const addMedicalTerm = new newMedTerm({
        term: req.body.term,
        definition: req.body.definition,
        category: req.body.category,
    })
    try {
        addMedicalTerm.save();
        res.redirect('/')
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

// Delete Customer
exports.deleteMedicalTerm = async (req, res) => {
    try {
        await newMedTerm.deleteOne({ _id: req.params.id });
        /* await req.flash('info', 'Deleted customer') */
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}


// Get Customer
// Search Customer Data
exports.searchMedData = async (req, res) => {
    try {
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

        const medWords = await newMedTerm.find({
            $or: [
                { term: { $regex: new RegExp(searchNoSpecialChar, "i") } },
                { definition: { $regex: new RegExp(searchNoSpecialChar, "i") } },
                { category: { $regex: new RegExp(searchNoSpecialChar, "i") } },
            ],
        });
        res.render("search", { medWords });
    } catch (error) {
        console.log(error);
    }
}

// Get Term with no prefix category
exports.searchNoPrefix = async (req, res) => {
    try {
        const medicalData = await newMedTerm.find({ category: "Term with no root" });
        res.render('medical/category', { medicalData })
    } catch (error) {
        res.render('404')
    }
}

exports.errorPage = async (req, res) => {
    res.render('404')
}