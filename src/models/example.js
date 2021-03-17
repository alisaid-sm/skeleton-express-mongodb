const mongoose = require('mongoose')


const exampleSchema = new mongoose.Schema({

    nama: {
        type: String,
        required: true
    },
    absen: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: null
    }

})

module.exports = mongoose.model('Example', exampleSchema)