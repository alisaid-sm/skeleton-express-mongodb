const express = require('express')
const exampleController = require('../controllers/example')
const { authentication, authorization } = require('../helpers/auth')

const router = express.Router()

router.get('/example', exampleController.getAll)
router.get('/example/:id', exampleController.getById)
router.post('/example', exampleController.create)
router.patch('/example/:id', exampleController.update)
router.delete('/example/:id', exampleController.delete)

module.exports = router