import express from 'express'
import ReviewController from '../controllers/review.controller.js'

const ReviewRouter = express.Router()
const controller = new ReviewController

ReviewRouter.get('/review', (req, res) => {
    controller.list(req, res)
})
ReviewRouter.get('/review/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})
ReviewRouter.post('/review', (req, res) => {
    controller.create(req, res)
})
ReviewRouter.put('/review/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
ReviewRouter.delete('/review/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export { ReviewRouter };
