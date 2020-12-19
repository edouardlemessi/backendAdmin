const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/',(req,res)=>{
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    });
});

router.post('/',(req,res)=>{
    insertRecord(req, res);
});

function insertRecord(req, res) {
    var employee = new Employee();
    employee.nom = req.body.nom;
    employee.prenom = req.body.prenom;
    employee.cin = req.body.cin;
    employee.email = req.body.email;
    employee.password = req.body.password;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.role = req.body.role;
    
    employee.save((err, doc) => {
        if (!err)
           res.json(employee)
        else {
            console.log('Error during record insertion : ' + err);
        }
    });
}

async function getAll(req, res){
    try{
        const find = await Employee.find();
        res.json(find);
      }catch(err){
          res.json({message : err});
     }
  }
  
  router.get('/list', async (req, res)=>{
      getAll(req, res);
  });

  router.get('/:id', async (req, res)=>{
    getCoffeeByCategory(req, res);
});

  async function getCoffeeByCategory(req, res){
    try{
        
        let findEm= await Employee.find().
        where('_id').equals(req.params.id).exec();
        res.json(findEm);
      }catch(err){
          res.json({message : err});
     }
  }
  async function updateE(req, res, id){
    try{
     const  update = await Employee.updateOne(
      {_id:id},
       {$set:{nom:req.body.nom,prenom:req.body.prenom,cin:req.body.cin,email:req.body.email,password:req.body.password,role:req.body.role,}}
       );
     res.json(update);
   }catch(err){
        res.json({message : err});
   }
}
router.patch('/:postid',async(req,res)=>{
    updateE(req, res,req.params.postid)
 });

async function deleteE(req,res, id){
   try{
     const removeP = await Employee.remove({_id:id});
     res.json(removeP);
   }catch(err){
        res.json({message : err});
   } 
}
router.delete('/del/:postid',async(req,res)=>{
   deleteE(req, res,req.params.postid)
});
router.post('/auth',async(req,res)=>{
  try{
    const role = await Employee.findOne({ email: req.body.email , password: req.body.password });
     res.json(role);
   }catch(err){
        res.json({message : err});
   } 
});


module.exports=router;