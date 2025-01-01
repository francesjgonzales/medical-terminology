const mongoose = require('mongoose');

const connectMongoose = async () => {
    try {
        // Connect to MongoDB via Mongoose
        const mongoString = process.env.DATABASE_URL
        mongoose.connect(mongoString)
        const mongooseDatabase = mongoose.connection
        mongooseDatabase.on('error', error => {
            console.log(error)
        })
        mongooseDatabase.once('connected', () => {
            console.log('Database connected')
        })
    } catch (error) {
        console.log(error)
    }
}



module.exports = connectMongoose;