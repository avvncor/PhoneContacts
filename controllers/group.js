const Group = require('../models/group')

exports.addGroup = (req, res, next) =>{
    const group = new Group({
        name:req.body.name
    })

    group.save()
    .then(group =>{
        res.status(200).json({
            message:"Group Created",
            group:group
        })
    })
    .catch( err=>{
        console.log(err);
        res.status(500)
            .json(err)
    })
}

exports.getGroups = (req, res, next) =>{
    Group.find()
    .then( groups =>{
       res.status(200).json({
           groups:groups
       })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json(err)
    })
}

