// This is connection Databases

const mongoose = require('mongoose')
const { DB_URL } = require('../helpers/env')

mongoose.connect(DB_URL, {useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection

module.exports = db