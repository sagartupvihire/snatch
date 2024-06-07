const mongoose = require('mongoose');
const debgr = require("debug")("development:mongoose");
const config = require("config");

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
// mongoose.connect( "mongodb://127.0.0.1:27017/scatch")
.then(function(){
    debgr("connect");
})
.catch((error)=>{
    debgr(error);
})

module.exports = mongoose.connection