import express from 'express'
import { sequelize } from '../config/db.sequelize.js';

const InitRouter = express.Router();

import ProductModel from '../models/product.model.js';
import BrandModel from '../models/brand.model.js'
import UserModel from '../models/user.model.js'
import TasteModel from '../models/taste.model.js'
import TypeModel from '../models/type.model.js'
import ReviewModel from '../models/review.model.js'



InitRouter.get('/init', (req, res) => {
    try {
        sequelize.sync()
        res.sendStatus(200)
    }
    catch(err){
        res.send(err)
    }
})

export { InitRouter } 