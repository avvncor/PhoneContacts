const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type:String, required:true
    },
    number: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true
    },
    address:{
        type:String,
    },
    profession:{
        type:String,
    },
    group:{
        type:mongoose.Schema.Types.ObjectId, ref:'group'
    }
})

module.exports = mongoose.model('contacts', contactSchema , 'contacts')