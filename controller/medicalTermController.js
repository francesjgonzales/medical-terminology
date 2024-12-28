const newData = require('../models/model')

const getAllMedicalTerm = async (req, res) => {
    try {
        const medicalNewData = await newData.find({});
        res.status(200).json(medicalNewData);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

module.exports = {
    getAllMedicalTerm
};

