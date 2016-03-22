var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
	id: String,	
	name: String,
	description: String, 
	image: String, 
	unitsAvailable: Number,
	unitPrice: Number,
	soldByVendor: String
});