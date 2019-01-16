const express = require('express');
const router = express.Router();

// router.get('/',(req,res,next) => {
//     res.status(200).json({
//         message: 'inside the GET events'
//     });
// });

// router.post('/',(req,res,next) => {
//     res.status(200).json({
//         message: 'inside the POST events'
//     });
// });

router.get('/:eventId',(req,res,next) =>{

    const id = req.params.eventId;

    res.status(200).json({
        message: 'inside event ID',
        id:id
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