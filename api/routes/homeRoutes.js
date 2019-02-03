const express = require('express');
const router = express.Router();
const PastModel=require('../models/gloriusPast');
const PastArray=require('../models/pastArray');
const mongoos=require('mongoose');


router.post('/past',(req,res,next) => {
    
    const pastArray=new PastArray({
        _id: new mongoos.Types.ObjectId(),
        name: req.body.name,
        imageUrl: req.body.imageUrl
    });

    pastArray.save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
            message: "done",
            inserted: pastArray
        });
    }).catch(err =>{
        console.log(err);
        res.status(500).json({error:err})
    });


    PastModel.findByIdAndUpdate(req.body.mainId,
        {$push: {data:pastArray._id}},{safe: true, upsert: true}).exec().then(result =>{
            console.log(result);
            res.status(201).json({
                message: "done",
                inserted: pastArray
            });
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({error:err})
        });

    
});

router.get('/past/:dataId',(req,res,next) => {

    const id = req.params.dataId;

    PastModel.findById(id)
    .populate('data')
    .exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });

});

module.exports = router;