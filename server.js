const express = require('express');
const mongoose =require("mongoose");

const router = require('./routes')
const app = express();
const databaseUrl = "mongodb+srv://nosha:abc1234@cluster0.pwc4b.mongodb.net/demo?retryWrites=true&w=majority"

mongoose.connect(databaseUrl)
.then((result)=> {
    app.listen(3000, () => {
        console.log('Listening to port 3000 ...');
    })
})
.catch((err)=> console.log(err));



app.use(express.static('public'))
app.set('view engine' ,'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use(router);
