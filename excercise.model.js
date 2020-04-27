//using mongoose to create a schema for our excercise
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const excerciseSchema = new Schema({
    username: {type: String, required:true},
    description:{type: String, required:true},
    duration:{type: Number, required:true},
    date:{type:Date, required:true},
},{
    timestamps:true,
});

//now we add the API endpoint routes so ther server can be used to do CRUD applications
//CRUD - CREATE READ UPDATE DELETE

const Excercise = mongoose.model('Excercise',excerciseSchema);

module.exports = Excercise;