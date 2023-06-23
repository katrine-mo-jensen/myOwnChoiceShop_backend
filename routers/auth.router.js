import express from 'express'
import { Authenticate, Authorize } from '../middleware/auth.js'

const AuthRouter = express.Router()

AuthRouter.post('/login', (req, res) => {
  Authenticate(req, res)
})

export default AuthRouter
