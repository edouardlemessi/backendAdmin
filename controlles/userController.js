const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

async function getAll(req, res){
  try{
      const find = await User.find();
      res.json(find);
    }catch(err){
        res.json({message : err});
   }
}

router.get('/all', async (req, res)=>{
    getAll(req, res);
});

async function insertUser(req, res) {
  var user = new User();
    user.nom = req.body.nom;
    user.prenom = req.body.prenom;
    user.cin = req.body.cin;
    user.cnss = req.body.cnss;
    user.salaire = req.body.salaire;
    user.telephone = req.body.telephone;
   try{
     const saveUser = await user.save();
     res.json(saveUser);
   }catch(err){
        res.json({message : err});

   }
}
router.post('/new', async(req, res)=> {
  insertUser(req, res);
});

async function getId(req, res, id){
  try{
     const findId = await User.findById(id);
     res.json(findId);
   }catch(err){
        res.json({message : err});
   }
}
router.get('/show/:postid',async(req,res)=>{
  getId(req, res,req.params.postid)
});

async function deleteE(req,res, id){
   try{
     const removeP = await User.remove({_id:id});
     res.json(removeP);
   }catch(err){
        res.json({message : err});
   } 
}
router.delete('/del/:postid',async(req,res)=>{
   deleteE(req, res,req.params.postid)
});

async function updateE(req, res, id){
    try{
     const update = await User.updateOne(
      {_id:id},
       {$set:{nom:req.body.nom,prenom:req.body.prenom, cin:req.body.cin,cnss:req.body.cnss,salaire:req.body.salaire, telephone:req.body.telephone}}
       );
     res.json(update);
   }catch(err){
        res.json({message : err});
   }
}
router.patch('/update/:postid',async(req,res)=>{
   updateE(req, res,req.params.postid)
});

module.exports=router;
