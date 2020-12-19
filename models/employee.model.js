const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: 'This field is required.'
    },
    prenom :String,
    cin: String,
    email: String,
    password:String,

    mobile:String,
    city:String,
   
    role: String
   
});

mongoose.model('Employee',employeeSchema);