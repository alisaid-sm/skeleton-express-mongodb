const exampleModels = require('../models/example')
const upload = require('../helpers/upload')
const { success, failed } = require('../helpers/response')

const example = {
    getAll: async (req, res) => {
        try {
           const result = await exampleModels.find()
           success(res, 200, result, 'ok')
        } catch (error) {
            failed(res, 500, [], 'internal server error')
        }
    },
    getById: async (req, res) => {
        try {
           const result = await exampleModels.findById(req.params.id)
           success(res, 200, result, 'ok')
        } catch (error) {
            failed(res, 404, [], 'internal server error')
        }
    },
    create: async (req, res) => {
        const exampleModel = new exampleModels({
            nama: req.body.nama,
            absen: req.body.absen
        })
        try {
           const result = await exampleModel.save()
           success(res, 201, result, 'ok')
        } catch (error) {
            failed(res, 400, [], 'internal server error')
        }
    },
    update: async (req, res) => {
        try {
           const exampleModel = await exampleModels.findById(req.params.id)
           exampleModel.updatedAt = Date.now()
           exampleModel.nama = !req.body.nama? exampleModel.nama : req.body.nama
           exampleModel.absen = !req.body.absen? exampleModel.absen : req.body.absen
           const result = await exampleModel.save()
           success(res, 200, result, 'ok')
        } catch (error) {
            failed(res, 400, [], 'internal server error')
        }
    },
    delete: async (req, res) => {
        try {
            const exampleModel = await exampleModels.findById(req.params.id)
            const result = await exampleModel.remove()
            success(res, 200, result, 'deleted')
        } catch (error) {
            failed(res, 400, [], 'internal server error')
        }
    }
}

module.exports = example