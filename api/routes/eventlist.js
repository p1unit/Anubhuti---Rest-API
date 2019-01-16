const express = require('express');
const router = express.Router();
const ListModel=require('../models/eventListModel');
const mongoos = require('mongoose');

router.get('/:eventListId',(req,res,next) =>{

    const id = req.params.eventListId;

    ListModel.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });

});

// router.post('/',(req,res,next) => {
    
//     const listModel=new ListModel({
//         _id:new mongoos.Types.ObjectId(),
//         eventType: req.body.eventType,
//     });
//     listModel.save();
// });

module.exports = router;