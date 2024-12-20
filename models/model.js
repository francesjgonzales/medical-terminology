const mongoose = require('mongoose');

const medicalTermSchema = new mongoose.Schema(
    {
        id: {
            required: true,
            type: String
        },
        term: {
            required: true,
            type: String
        },
        definition: {
            required: true,
            type: String
        },
        common_roots: {
            required: true,
            type: String
        },
        example: {
            required: true,
            type: String
        },
        image: {
            required: true,
            type: String
        },
    }
)

module.exports = mongoose.model('Data', medicalTermSchema)