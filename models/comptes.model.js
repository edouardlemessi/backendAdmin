const mongoose = require('mongoose');
const Role = mongoose.model('Role');
const User = mongoose.model('User');

var CompteSchema = new mongoose.Schema({
  
    email: {
        type: String,
        required: 'This field is required.'
    },
    password: {
        type: String,
        required: 'This field is required.'
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: 'This field is required.'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: 'This field is required.'
    }
    
});

mongoose.model('Compte',CompteSchema);