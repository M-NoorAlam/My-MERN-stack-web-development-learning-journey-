const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    phoneNo:{
        type:Number,
    },
    password:{
        type:String,
    }

})

module.exports = mongoose.model('user',userSchema)