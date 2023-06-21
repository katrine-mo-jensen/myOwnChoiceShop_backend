import BrandModel from '../models/brand.model.js'
import ProductModel from '../models/product.model.js'

BrandModel.hasMany(ProductModel)
ProductModel.belongsTo(BrandModel)


class BrandController {
    list = async (req, res) => {
        let { limit, attributes } = req.query
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array('id', 'name')


        const result = await BrandModel.findAll({
            attributes: attr,
            limit: limit
        })
        res.json(result)
    }

details = async (req, res) => {
    const { id } = req.params || 0
    const result = await BrandModel.findOne({
        attributes: ['id', 'name'],
        where: { id: id }
    })
    res.json(result)
}

create = async (req, res) => {
    const { name } = req.body;
    if(name) {
        const model = await BrandModel.create(req.body)
        res.json({ newId: model.id })
    } else {
        res.sendStatus(418)
    }
}

update = async (req, res) => {
    const { id } = req.params || 0
    const { name } = req.body;
    if(id && name) {
        const model = await BrandModel.update(req.body, {
            where: { id: id }
        })
        res.json({
            msg: 'Brand updated'
        })
    } else {
        res.sendStatus(418)
    }
}
delete = async (req, res) => {
    try {
        await BrandModel.destroy({ where: { id: req.params.id }});
        res.sendStatus(200)
    } catch(err) {
        res.send(err)
    }
}

}

export default BrandController