const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Role = mongoose.model('Role');

async function getAll(req, res){
  try{
      const find = await Role.find();
      res.json(find);
    }catch(err){
        res.json({message : err});
   }
}

router.get('/all', async (req, res)=>{
    getAll(req, res);
});

async function insertRole(req, res) {
  var role = new Role();
    role.libelle = req.body.libelle;
   try{
     const saverole = await role.save();
     res.json(saverole);
   }catch(err){
        res.json({message : err});

   }
}
router.post('/new', async(req, res)=> {
  insertRole(req, res);
});

async function getId(req, res, id){
  try{
     const findId = await Role.findById(id);
     res.json(findId);
   }catch(err){
        res.json({message : err});
   }
}
router.get('/show/:postid',async(req,res)=>{
  getId(req, res,req.params.postid)
});

async function deleteR(req,res, id){
   try{
     const removeP = await Role.remove({_id:id});
     res.json(removeP);
   }catch(err){
        res.json({message : err});
   } 
}
router.delete('/del/:postid',async(req,res)=>{
   deleteR(req, res,req.params.postid)
});

async function updateE(req, res, id){
    try{
     const update = await Role.updateOne(
      {_id:id},
       {$set:{libelle:req.body.libelle}}
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
