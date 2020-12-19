const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Cat = mongoose.model('Cat_M');

async function getAll(req, res){
  try{
      const find = await Cat.find();
      res.json(find);
    }catch(err){
        res.json({message : err});
   }
}

router.get('/all', async (req, res)=>{
    getAll(req, res);
});

async function insertCat(req, res) {
  var cat = new Cat();
    cat.libelle = req.body.libelle;
   try{
     const saverole = await cat.save();
     res.json(saverole);
   }catch(err){
        res.json({message : err});

   }
}
router.post('/new', async(req, res)=> {
  insertCat(req, res);
});

async function getId(req, res, id){
  try{
     const findId = await Cat.findById(id);
     res.json(findId);
   }catch(err){
        res.json({message : err});
   }
}
router.get('/show/:postid',async(req,res)=>{
  getId(req, res,req.params.postid)
});

async function deleteC(req,res, id){
   try{
     const removeP = await Cat.remove({_id:id});
     res.json(removeP);
   }catch(err){
        res.json({message : err});
   } 
}
router.delete('/del/:postid',async(req,res)=>{
   deleteC(req, res,req.params.postid)
});

async function updateE(req, res, id){
    try{
     const update = await Cat.updateOne(
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
