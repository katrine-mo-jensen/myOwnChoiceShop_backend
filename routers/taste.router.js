import express from 'express'
import TasteController from '../controllers/taste.controller.js'

const TasteRouter = express.Router()
const controller = new TasteController

TasteRouter.get('/taste', (req, res) => {
    controller.list(req, res)
})
TasteRouter.get('/taste/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})
TasteRouter.post('/taste', (req, res) => {
    controller.create(req, res)
})
TasteRouter.put('/taste/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
TasteRouter.delete('/taste/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export { TasteRouter };
