const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Mat = mongoose.model('Materiel');

async function getAll(req, res){
  try{
      const find = await Mat.find();
      res.json(find);
    }catch(err){
        res.json({message : err});
   }
}

router.get('/all', async (req, res)=>{
    getAll(req, res);
});

async function insertM(req, res) {
  var mat = new Mat();
    mat.disponibilite = req.body.disponibilite;
    mat.desi = req.body.designation;
    mat.date_achat = req.body.date_achat;
    mat.etat = req.body.etat;
    mat.cat = req.body.cat;
    mat.urlImage = req.body.urlImage;
       try{
     const saveCompte = await mat.save();
     res.json(saveCompte);
   }catch(err){
        res.json({message : err});

   }
}
router.post('/new', async(req, res)=> {
  insertM(req, res);
});

async function getId(req, res, id){
  try{
     const findId = await Mat.findById(id);
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
     const removeP = await Mat.remove({_id:id});
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
     const update = await Mat.updateOne(
      {_id:id},
       {$set:{desi:req.body.designation,disponibilite:req.body.disponibilite,
        etat:req.body.etat,date_achat:req.body.date_achat, cat:req.body.cat}}
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
