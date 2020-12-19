const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Prod = mongoose.model('Produit');
const Cat = mongoose.model('Cat_P');

async function getAll(req, res){
  try{
      const find = await Prod.find();
      res.json(find);
    }catch(err){
        res.json({message : err});
   }
}

router.get('/all', async (req, res)=>{
    getAll(req, res);
});

async function insertP(req, res) {
  var prod = new Prod();
  
    prod.imageUrl = req.body.imageUrl;
     prod.date_peremption = req.body.date_peremption;
    prod.designation = req.body.designation;
    prod.date_achat = req.body.date_achat;
    prod.prix_achat = req.body.prix_achat;
    prod.prix_vente = req.body.prix_vente;
    prod.quantite = req.body.quantite;
    prod.cat =req.body.cat;
   
   try{
     const saveCompte = await prod.save();
     res.json(saveCompte);
   }catch(err){
        res.json({message : err});

   }
}
router.post('/new', async(req, res)=> {
  insertP(req, res);
});

async function getId(req, res, id){
  try{
     const findId = await Prod.findById(id);
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
     const removeP = await Prod.remove({_id:id});
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
     const update = await Prod.updateOne(
      {_id:id},
       {$set:{designation:req.body.designation,date_achat:req.body.date_achat,
        date_peremption:req.body.date_peremption,prix_achat:req.body.prix_achat,prix_vente:req.body.prix_vente,
        quantite : req.body.quantite, cat:req.body.quantite,imageUrl:req.body.imageUrl}}
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
