import TypeModel from '../models/brand.model.js'
import ProductModel from '../models/product.model.js'

TypeModel.hasMany(ProductModel)
ProductModel.belongsTo(TypeModel)


class TypeController {
    list = async (req, res) => {
        let { limit, attributes } = req.query
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array('id', 'name')


        const result = await TypeModel.findAll({
            attributes: attr,
            limit: limit
        })
        res.json(result)
    }

details = async (req, res) => {
    const { id } = req.params || 0
    const result = await TypeModel.findOne({
        attributes: ['id', 'type'],
        where: { id: id }
    })
    res.json(result)
}

create = async (req, res) => {
    const { type } = req.body;
    if(type) {
        const model = await TypeModel.create(req.body)
        res.json({ newId: model.id })
    } else {
        res.sendStatus(418)
    }
}

update = async (req, res) => {
    const { id } = req.params || 0
    const { type } = req.body;
    if(id && type) {
        const model = await TypeModel.update(req.body, {
            where: { id: id }
        })
        res.json({
            msg: 'Type updated'
        })
    } else {
        res.sendStatus(418)
    }
}
delete = async (req, res) => {
    try {
        await TypeModel.destroy({ where: { id: req.params.id }});
        res.sendStatus(200)
    } catch(err) {
        res.send(err)
    }
}

}

export default TypeController