import express from 'express'
import TypeController from '../controllers/type.controller.js'

const TypeRouter = express.Router()
const controller = new TypeController

TypeRouter.get('/type', (req, res) => {
    controller.list(req, res)
})
TypeRouter.get('/type/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})
TypeRouter.post('/type', (req, res) => {
    controller.create(req, res)
})
TypeRouter.put('/type/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
TypeRouter.delete('/type/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export { TypeRouter };
