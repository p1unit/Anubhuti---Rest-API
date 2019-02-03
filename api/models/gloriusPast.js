const mongoos=require('mongoose');

const gloriousPast = mongoos.Schema({
    _id: mongoos.Schema.Types.ObjectId,
    data:[
        { type: mongoos.Schema.Types.ObjectId, ref: 'PastArray'}
    ]
});

module.exports = mongoos.model('GloriousPast',gloriousPast);