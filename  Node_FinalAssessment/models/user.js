// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var userSchema = new Schema({
    name: { type: String, unique: true },
    password: { type: String},
    emailId: { type: String },
    mobileNumber: { type: Number },
});

// we need to create a model for using schema
var User = mongoose.model('user', userSchema);

// make this available to our user in our Node applications
module.exports = User;