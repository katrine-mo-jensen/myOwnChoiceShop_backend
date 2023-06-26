import TasteModel from '../models/brand.model.js'
import ProductModel from '../models/product.model.js'

TasteModel.hasMany(ProductModel)
ProductModel.belongsTo(TasteModel)


class TasteController {
    list = async (req, res) => {
        let { limit, attributes } = req.query
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array('id', 'name')


        const result = await TasteModel.findAll({
            attributes: attr,
            limit: limit
        })
        res.json(result)
    }

details = async (req, res) => {
    const { id } = req.params || 0
    const result = await TasteModel.findOne({
        attributes: ['id', 'taste'],
        where: { id: id }
    })
    res.json(result)
}

create = async (req, res) => {
    const { taste } = req.body;
    if(taste) {
        const model = await TasteModel.create(req.body)
        res.json({ newId: model.id })
    } else {
        res.sendStatus(418)
    }
}

update = async (req, res) => {
    const { id } = req.params || 0
    const { taste } = req.body;
    if(id && taste) {
        const model = await TasteModel.update(req.body, {
            where: { id: id }
        })
        res.json({
            msg: 'Taste updated'
        })
    } else {
        res.sendStatus(418)
    }
}
delete = async (req, res) => {
    try {
        await TasteModel.destroy({ where: { id: req.params.id }});
        res.sendStatus(200)
    } catch(err) {
        res.send(err)
    }
}

}

export default TasteController