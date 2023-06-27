import express from 'express'
import BrandController from '../controllers/brand.controller.js'

const brandRouter = express.Router()
const controller = new BrandController

brandRouter.get('/brand', (req, res) => {
    controller.list(req, res)
})
brandRouter.get('/brand/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})
brandRouter.post('/brand', (req, res) => {
    controller.create(req, res)
})
brandRouter.put('/brand/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
brandRouter.delete('/brand/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export default  brandRouter ;
