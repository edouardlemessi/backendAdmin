const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('Mongodb connection succed');
    }
    else{
        console.log('Error in DB connection :'+err);
    }
});
require('./employee.model');
require('./roles.model');
require('./users.model');
require('./comptes.model');
require('./cat_m.model');
require('./cat_p.model');
require('./mats.model');
require('./produits.model');
require('./coffee.model');
