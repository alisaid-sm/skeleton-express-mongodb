const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const exampleRouter = require('./src/routers/example')
const { PORT } = require('./src/helpers/env')

const app = express()

const db = require('./src/configs/connection')
db.on('open', () => {
    console.log('database connected...')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app
    .use('/api/v1', exampleRouter)
    .use(express.static('src/images'))

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})