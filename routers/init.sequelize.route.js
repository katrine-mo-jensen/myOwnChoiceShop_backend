import express from 'express'
import { sequelize } from '../config/db.sequelize.js';

const router = express.Router();

import productModel from '../models/product.model.js';

router.get('/init', (req, res) => {
    try {
        sequelize.sync()
        res.sendStatus(200)
    }
    catch(err){

    }
})

export { router } 