//using mongoose to create a schema for our user
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        trim:true, //trim whitespace in string
        minlength: 3
    },
},{
    timestamps: true, //show when created and modified
});

const User = mongoose.model('User',userSchema);
//'User' is the name we will use
module.exports = User;