const mongoose = require('mongoose');

var PSchema = new mongoose.Schema({
    imageUrl: {
        type: String
    },
    designation: {
        type: String
    },
    date_achat: {
        type: String
    },
    date_peremption: {
        type: String
    },
    prix_achat: {
        type: String
    },
    prix_vente: {
        type: String
    },
    quantite: {
        type: String  },
    cat: {
        type:String
    }
    
});

mongoose.model('Produit',PSchema);