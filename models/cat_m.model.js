const mongoose = require('mongoose');

var Cat_MSchema = new mongoose.Schema({
   
    libelle: {
        type: String,
        required: 'This field is required.'
    }
    
});

mongoose.model('Cat_M',Cat_MSchema);