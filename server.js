const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
//mongoose is whats going to help us connect to our mongoDB database


require('dotenv').config();
//this configures si we can have our environment variables in the dotenv file

const app = express();
const port = process.env.PORT || 5000;
//this is how we will create our express server 

app.use(cors());
app.use(express.json());
app.use(axios());
//this is our middle ware this will allopw us to parse json
// cause the server will be sending s=and receiving json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true});
//uri is where database is stored
const connection = mongoose.connection;
connection.once('open',() =>{
    console.log("MongoDB database connection established successfully");
});
//once connection is open its going to log the message

const exercisesRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');
//importing 

app.use('/excercises',exercisesRouter);
app.use('/users',usersRouter);
//use files
//whenever somebody goes to route url and put /excersies at the end it will show
//everything in excercises and the same for users


app.listen(port,()=>{
    console.log('Server is running on port: ' + port);
});
//this is what starts the server. It start listening to a certain port