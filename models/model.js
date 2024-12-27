const mongoose = require('mongoose');

const medicalTermSchema = mongoose.Schema(
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
        image: {
            required: false,
            type: String
        },
    }
)

