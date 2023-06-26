import express from 'express'
import UserController from '../controllers/user.controller.js'

const UserRouter = express.Router()
const controller = new UserController

UserRouter.get('/user', (req, res) => {
    controller.list(req, res)
})
UserRouter.get('/user/:id([0-9]*)', (req, res) => {
    controller.details(req, res)
})
UserRouter.post('/user', (req, res) => {
    controller.create(req, res)
})
UserRouter.put('/user/:id([0-9]*)', (req, res) => {
    controller.update(req, res)
})
UserRouter.delete('/user/:id([0-9]*)', (req, res) => {
    controller.delete(req, res)
})

export { UserRouter };
