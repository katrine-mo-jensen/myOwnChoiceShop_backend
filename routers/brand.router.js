import express from 'express'
import BrandController from '../controllers/brand.controller.js'

const BrandRouter = express.Router()
const controller = new BrandController

BrandRouter.get('/brand', (req, res) => {
    controller.list(req, res)
})
BrandRouter.get('/brand/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})
BrandRouter.post('/brand', (req, res) => {
    controller.create(req, res)
})
BrandRouter.put('/brand/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
BrandRouter.delete('/brand/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export {BrandRouter} ;
