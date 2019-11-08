const mongoose = require('mongoose');
const Contact = require('../models/contacts')
var { validationResult } = require('express-validator/check')
exports.getContacts = (req, res, next) =>{
    Contact.find()
        .select('name number')
        .then( contacts =>{
            // if(contacts.length = 0){
            //     return res.status(404).json({message:"No Contacts"})
            // }
            res.status(200).json({
                Contacts:contacts,
                request:{
                    type:"POST",
                    url:"http://localhost:8080/addContact"
                }
            })
        })
        .catch( err =>{
            console.log(err);
            res.status(500).json(err)
        })
}

exports.addContact = (req, res, next) =>{
    var errors = validationResult(req)
    var name = req.body.name;
    var number = req.body.number
   
    
   
    
    if(number.charAt(0)==5 && number.charAt(1)==6 && number.charAt(2)==7 && number.charAt(3)==8 ){
        
    }
    else{
        return res.json('Number Should start with 5678')
    }

    if(!errors.isEmpty()){
        res.status(422).json({errors:errors.array()[0].msg +" for "+errors.array()[0].param})
    }
    else{
        var contact = new Contact({
            name:req.body.name,
            number:req.body.number,
            email:req.body.email,
            address:req.body.name,
            profession:req.body.profession
           }) 
    
           contact.save()
            .then( contact =>{
               res.status(200)
                .json({
                    message:"Contact Added",
                    Contact:contact,
                    request:{
                        type:"GET",
                        url:"http://localhost:8080/getContacts"
                     }
                   })
            })
            .catch( err =>{
               console.log(err);
               res.status(500).json(err)
             })
    }
  
}

exports.removeContact = (req, res, next) =>{

    Contact.findByIdAndDelete(req.params.id)
        .exec()
        .then( removedContact =>{
            res.status(200).json({
                message:'Removed',
                request:{
                    type:"POST",
                    url:"http://localhost:8080/addContact"
                }
            })
        })
        .catch( err =>{
            console.log(err);
            res.status(500).json(err)
        })
}

exports.editContact = (req, res, next) =>{

    Contact.findByIdAndUpdate(req.params.id, req.body)
        .then( updatedProduct => {
            res.status(200).json({
                request:{
                    message:'Updated',
                    type:"GET",
                    url:"http://localhost:8080/getContacts"
                }
            })
        })
        .catch()
}

exports.getContactSummary = (req, res, next) =>{
    Contact.findById(req.params.id)
        .exec()
        .then( contact =>{
            res.status(200).json({
                Summary:contact,
                request:{
                    message:'Updated',
                    type:"GET",
                    url:"http://localhost:8080/getContacts"
                }
            })
        })
        .catch(
            err =>{
                console.log(err)
                res.status(500).json({
                    message:err
                })
            }
        )
}