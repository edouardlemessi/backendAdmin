const mongoose = require('mongoose');

var Cat_PSchema = new mongoose.Schema({
   
    libelle: {
        type: String,
        required: 'This field is required.'
    }
    
});

mongoose.model('Cat_P',Cat_PSchema);