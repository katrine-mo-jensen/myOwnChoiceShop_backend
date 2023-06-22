import express from 'express'

const router = express.Router();

router.get('/init', (req, res) => {res.json(1234)})

export { router } 