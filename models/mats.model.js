const mongoose = require('mongoose');
const Cat_M = mongoose.model('Cat_M');

var MSchema = new mongoose.Schema({
  
    desi: {
        type: String,
        required: 'This field is required.'
    },
    date_achat: {
        type: String
    },
    disponibilite: {
        type: String,
        required: 'This field is required.'
    },
    etat: {
        type: String,
        required: 'This field is required.'
    },
    cat:{
        type: String,
        required: 'This field is required.'
    },
    urlImage: {
        type: String,
        required: 'This field is required.'
    }
    
});

mongoose.model('Materiel',MSchema);