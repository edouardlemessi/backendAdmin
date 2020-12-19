const mongoose = require('mongoose');

var RoleSchema = new mongoose.Schema({
   
    libelle: {
        type: String
    },
    title: {
        type: String
    },
     prix: {
        type: String
    },
     date: {
        type: String
    },
     image: {
        type: String
    },
    etat: {
        type: String
    }
    
    
    
});

mongoose.model('Role',RoleSchema);