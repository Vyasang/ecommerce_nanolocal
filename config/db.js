/*var mongoose = require('mongoose');

//connecting multiple database
var ecommdb = mongoose.connect("mongodb://127.0.0.1:27017/abcecomm");

var userSchema = require('../model/user');
var productSchema = require('../model/products'); //by keeping product schema separate, we can easily scale (shard, replicate etc.,) the product cataloging quick and effectively

module.exports = {
  credentialModel : mongoose.model('Credential',credentialSchema),
  userModel : mongoose.model('User',userSchema),
  widgetModel : mongoose.model('Widget', widgetSchema),
  widgetMdxModel : studiodb.model('Widget', widgetMdxSchema),
  connectionModel : studiodb.model('Connection',connectionSchema)
};*/

//'url' : 'mongodb://<dbuser>:<dbpassword>@novus.modulusmongo.net:27017/<dbName>'
module.exports = {  
  url: "mongodb://localhost:27017/abcecomm"
};
