const Member = require('../models/members')

exports.addMember = (req, res, next) => {
        contactId = req.body.contactId;
        groupId = req.body.groupId;

        const member = new Member({
            group:groupId,
            contact:contactId
        })

        member.save()
            .then( result =>{
                res.status(200)
                    .json({
                        message:" Contact Added to group"
                    })
            })
            .catch(err => {
                res.status(500)
                    .json({
                        message:err
                    })
            })
}

exports.getMembers = (req, res, next) =>{
    Member.find({group:req.params.groupId})
        .populate('group  contact')
        .exec()
        .then( members => {
            res.status(200).json({'Group and its Members':members})
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json(err)
        })
} 