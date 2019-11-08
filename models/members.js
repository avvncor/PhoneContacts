const mongoose = require('mongoose');

const membersSchema = mongoose.Schema({
    group:{
        type:mongoose.Types.ObjectId, required:true, ref:'groups'
    },
    contact:{
        type:mongoose.Types.ObjectId, required:true, ref:'contacts'
    }
})

module.exports = mongoose.model('members', membersSchema , 'members')