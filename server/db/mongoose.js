var mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
//mongodb://admin:admin123@ds145220.mlab.com:45220/nhs-app
//mongodb://localhost:27017/main
//mongodb+srv://user:<password>@cluster0.zzpbu.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/main',{useMongoClient: true});
module.exports = {mongoose};