const express = require('express');
const router = express.Router();
const phoneBookController = require('../controllers/contact');
var { check, body   } = require('express-validator/check')
const Contact = require('../models/contacts')

router.get('/getContacts', phoneBookController.getContacts)
router.post('/addContact', 
[
    check('email')
    .isEmail()
    .withMessage('In Valid Email')
    .custom((value, {req})=>{
        return Contact.findOne({email:value})
         .then( contact =>{
           if(contact){  
             return Promise.reject('Email already exits')
           }
         })
     })
     .normalizeEmail(),


    body('number')
        .isNumeric()
        .isLength({min:10,max:10})
        .custom((value, {req})=>{
            return Contact.findOne({number:value})
             .then( contact =>{
               if(contact){  
                 return Promise.reject('Number already exits')
               }
             })
         }),
    body('name')
    .isLength({min:3, max:16})
    .trim(),
    
],
phoneBookController.addContact)
router.delete('/removeContact/:id',phoneBookController.removeContact)
router.patch('/editContact/:id',phoneBookController.editContact)
router.get('/getContactSummary/:id',phoneBookController.getContactSummary)
module.exports = router;