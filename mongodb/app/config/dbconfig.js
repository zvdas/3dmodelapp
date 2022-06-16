const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/threedm_db', (err) => {
    if(!err){
        console.log("Connection to MongoDB Successful");
    }else{
        console.log(`Connection to MongoDB Failed with error : ${JSON.stringify(err, undefined, 2)}`);
    }
})

module.exports = mongoose;