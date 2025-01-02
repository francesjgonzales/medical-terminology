const mongoose = require('mongoose');

// POST - Created Mongoose model
const newMedTerm = new mongoose.Schema(
    {
        term: {
            type: String,
        },
        definition: {
            type: String
        },
        image: {
            type: String
        },
        category: {
            type: String,
            enum: ['Term with no root', 'Term with no prefix'],
        }
    }
)



module.exports = mongoose.model('submitted_form', newMedTerm)