var mongoose = require('mongoose');

var PersonnelSchema = mongoose.Schema(
   {
   	nom:{
   		type: String,
   		required: true
   	},
   	prenom:{
   		type: String,
   		required: true
   	},
      cin:{
         type: String,
         required: true
      },
      cnss:{
         type: String,
         required: true
      },
      salaire:{
         type: String,
         required: true
      },
      telephone:{
         type: String,
         required: true
      }
   });
module.exports = mongoose.model('User',PersonnelSchema);