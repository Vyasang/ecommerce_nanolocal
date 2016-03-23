var Product = require('../models/product');

module.exports = function(req, res) {

	addNewProduct = function() {
		console.log("*** 			new Product will be added");
	}

	process.nextTick(addNewProduct);
}