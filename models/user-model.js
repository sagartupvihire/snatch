const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
{

    fullname : String,
    email : String,
    password : String,
    cart : {
        type : Array,
        default : []
    },
    isadmin : Boolean,
    contact : Number,
    orders : {
        type : Array,
        default : []
    },
    picture : String
});

module.exports = mongoose.model("user", userSchema);