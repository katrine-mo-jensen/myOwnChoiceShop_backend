import express from 'express'
import { Authenticate, Authorize } from '../middleware/auth.js'
const AuthRouter = express.Router()

AuthRouter.post('/login', (req, res) => {Authenticate(req, res)})
AuthRouter.get('/authorize', Authorize, (req, res, next) => { res.req(' Du er logget ind')})

export default AuthRouter
