class productController {
	constructor() {
		console.log('Class productController instantiated');
	}

	list = () => {
		console.log('Kører list metode');
		return true
	}

	details = () => {
		console.log('Kører details metode');
		return true
	}

	// create
	create = () => {
		console.log('Kører create metode');
		return true
	}
	// update
	update = () => {
		console.log('Kører update metode');
		return true
	}

	// delete
	delete = () => {
		console.log('Kører delete metode');
		return true
	}
}

export default productController