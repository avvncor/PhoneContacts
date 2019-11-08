const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const contactRoutes = require('./routes/contact')
const groupRoutes = require('./routes/group')
const members = require('./routes/members')
const error = require('./controllers/error')

const dbString = 'mongodb://localhost:27017/PhoneBookAssignment-Amaan';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(contactRoutes)
app.use(groupRoutes)
app.use(members)
app.use(error.get404)



mongoose.connect(dbString,{useNewUrlParser:true,useUnifiedTopology: true})
    .then(connect =>{
            app.listen(8080)
            console.log('listening')
    })
    .catch(err=>{
        console.log(err)
    })