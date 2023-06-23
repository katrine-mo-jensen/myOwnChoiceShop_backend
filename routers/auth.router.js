import express from 'express'
const AuthRouter = express.Router()

AuthRouter.post('/login', (req, res) => { 
    console.log(req.body)
    })

export default AuthRouter