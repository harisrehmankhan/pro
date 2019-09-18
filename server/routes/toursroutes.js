const express = require('express');
const router=express.Router();
const Rental = require('../models/tours');
router.get('',function(req,res){
    // res.json({'ok':true});
    Rental.find({},(err,foundRentals)=>{
        res.json(foundRentals);
    });
});

router.get('/:id',function(req,res){
    const rentalId=req.params.id;
    Rental.findById(rentalId,function(err,foundRental){
        if(err){
            res.status(422).send({errors:[{title:'Rental error!',detail:'Could not find Rental'}]});
        }
        res.json(foundRental);
    });
});

module.exports=router;

