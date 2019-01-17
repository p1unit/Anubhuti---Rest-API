const express = require('express');
const router = express.Router();
const EventModel=require('../models/eventModel');
const mongoos=require('mongoose');
const EventList=require('../models/eventListModel');
const ArrayDataModel =require('../models/arrayDataModel');

// router.get('/',(req,res,next) => {
//     res.status(200).json({
//         message: 'inside the GET events'
//     });
// });

router.post('/',(req,res,next) => {
    
    const eventModel=new EventModel({
        _id: new mongoos.Types.ObjectId(),
        name: req.body.name,
        desc: req.body.desc,
        imageUrl: req.body.imageUrl
    });

    const arrayDataModel = new ArrayDataModel({
        _id: new mongoos.Types.ObjectId(),
        descId: eventModel._id,
        name: req.body.name,
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
        regUrl: req.body.image,
    });  

    eventModel.save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
            message: "done",
            inserted: eventModel
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err})
    });

    arrayDataModel.save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
            message: "done",
            inserted: eventModel
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err})
    });

    EventList.findByIdAndUpdate(req.body.mainId,
        {$push: {allData:arrayDataModel._id}},{safe: true, upsert: true}).exec().then(result =>{
            console.log(result);
            res.status(201).json({
                message: "done",
                inserted: eventModel
            });
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({error:err})
        });
});

router.get('/:eventId',(req,res,next) =>{

    const id = req.params.eventId;

    EventModel.findById(id)
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

// router.patch('/:eventId',(req,res,next) =>{

//     const id = req.params.eventId;

//     res.status(200).json({
//         message: 'updated event',
//         id:id
//     });
// });

// router.delete('/:eventId',(req,res,next) =>{

//     const id = req.params.eventId;
    
//     res.status(200).json({
//         message: 'deleted event',
//         id:id
//     });
// });


module.exports = router;