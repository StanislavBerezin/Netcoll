const mongoose = require('mongoose');
const config = require('./config/config')

mongoose.Promise = global.Promise;
mongoose.connect(config.db.port, {useMongoClient: true},(err, good)=>{
    console.log('hooked up to db')
})


module.exports={mongoose};
