import productModel from "../models/product.model.js";

const model = new productModel

class productController {
	constructor() {
		console.log('Class productController instantiated');
	}

	list = async (req, res) => {
		console.log('Kører list metode');
		const result = await model.findAll({
			// control fx. limit, order
		})
		res.json(result)
		// return true
	}
	// details
	details = async (req, res) => {
		console.log('Kører details metode');
		const result = await model.findAll({
			where: { id: req.params.id} 
		})
		res.json(...result)
		// return true
	}

	// create
	create = async (req, res) => {
		console.log('Kører create metode');
		const { item_number, title, description, stock, taste_id, brand_id, type_id, size, img, price} = req.body; 
		
		if(item_number && title && description && stock && taste_id && brand_id && type_id && size && img && price) {
			const model = await productModel.create(req.body)
			return res.json({newid: model.id})
		} else  {
			res.send(418)
		}
		// return true
	}
	// update
	update = async (req, res) => {
		console.log('Kører update metode');
		const { item_number, title, description, stock, taste_id, brand_id, type_id, size, img, price, id} = req.body; 
		
		if(item_number && title && description && stock && taste_id && brand_id && type_id && size && img && price && id) {
			const model = await productModel.update(req.body, { where: { id: id }})
			return res.json({status : true })
		} else {
			res.send(418)
		}
		// return true
	}

	// delete
	delete = async (req, res) => {
		console.log('Kører delete metode');
		try {
			await productModel.destroy({ where: { id: req.params.id }})
			res.sendStatus(200)
		} 
		catch(err) {
			res.send(err)
		}
		// return true
	}
}

export default productController