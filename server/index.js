const express = require('express');
const mongoose=require('mongoose');
const conf= require('./config/cred');
const Tours= require('./models/tours');
const FakeDB= require('./fakedb');
const tourRoutes=require('./routes/toursroutes');

const MongoClient = require('mongodb').MongoClient;
const uri = conf.DB_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology:true });
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true }).then(()=>{
    const fakedb =new FakeDB;
    fakedb.seeDb();
});


// mongoose.connect('mongodb+srv://tourmetad:BAHRIAS18@cluster0-7pqtp.azure.mongodb.net/test?retryWrites=true&w=majority');

const app = express();
// app.get('/dest',function(req,res){
//     res.json({'success':true});
// });

app.use('/api/v1/dest',tourRoutes);

const PORT = 3001;

app.listen(PORT,function(){
    console.log('App is running!');
});