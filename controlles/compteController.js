const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Compte = mongoose.model('Compte');
const User = mongoose.model('User');
const Role = mongoose.model('Role');

async function getAll(req, res){
  try{
      const find = await Compte.find();
      res.json(find);
    }catch(err){
        res.json({message : err});
   }
}

router.get('/all', async (req, res)=>{
    getAll(req, res);
});

async function insertUser(req, res) {
  const role = await Role.findOne({ libelle: req.body.role });
  const user = await User.findOne({ cin: req.body.user});
  var compte = new Compte();
   if (role != null && user != null ) {
    compte.email = req.body.email;
    compte.password = req.body.password;
    compte.user = user._id;
    compte.role = role._id;
    }
   try{
     const saveCompte = await compte.save();
     res.json(saveCompte);
   }catch(err){
        res.json({message : err});

   }
}
router.post('/new', async(req, res)=> {
  insertUser(req, res);
});

async function getId(req, res, id){
  try{
     const findId = await Compte.findById(id);
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
     const removeP = await Compte.remove({_id:id});
     res.json(removeP);
   }catch(err){
        res.json({message : err});
   } 
}
router.delete('/del/:postid',async(req,res)=>{
   deleteE(req, res,req.params.postid)
});

async function updateE(req, res, id){
     const role = await Role.findOne({ libelle: req.body.role });
     const user = await User.findOne({ cin: req.body.user});
    try{
     const update = await Compte.updateOne(
      {_id:id},
       {$set:{email:req.body.email,password:req.body.password, role:role._id,user:user._id}}
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
