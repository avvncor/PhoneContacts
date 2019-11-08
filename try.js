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

      
        // if(number.charAt(0)==5 && number.charAt(1)==6 && number.charAt(2)==7 && number.charAt(3)==8 ){
        //     //return res.json('accepted with 5678')
        // }
        // else{
        //     return res.json('Number Should start with 5678')
        // }
        if(number.charAt(0)==5 && number.charAt(1)==6 && number.charAt(2)==7 && number.charAt(3)==8 ){
           
        }
        else{
           return Promise.reject('Number Should start with 5678')
           }
       