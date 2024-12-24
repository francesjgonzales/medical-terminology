const medicalTerm = require('../models/model')

const getAllMedicalTerm = async (req, res) => {
    try {
        const mediccal = await medicalTerm.find({});
        res.status(200).json(mediccal);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

module.exports = {
    getAllMedicalTerm
};

