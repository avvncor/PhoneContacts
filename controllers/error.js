
const APIs = ['http://localhost:8080/getContacts','http://localhost:8080/addContact', 
   'http://localhost:8080/editContact/:id' , 'http://localhost:8080/removeContact/:id',
   'http://localhost:8080/getContactSummary/:id', 'http://localhost:8080/addGroup',
   'http://localhost:8080/getGroups',  'http://localhost:8080/addMember' ,{
        "adding member": {
            "contactId":"is required",
            "groupId":"is required"
        }
   },
   'http://localhost:8080/getMembers/:groupId',{
       "message":"it will populate group and contact details"
   }
]
exports.get404 =  (req, res, next)=>{
   return  res.status(404)
            .json({
                message:"API NOT FOUND",
                'Please Use':{
                    APIs: APIs
                }
            })
}
