const mongoos=require('mongoose');

const arrayDataModel = mongoos.Schema({
    _id: mongoos.Schema.Types.ObjectId,
    descId: { type: mongoos.Schema.Types.ObjectId, ref: 'Event'},
    name: String,
    image1: String,
    image2: String,
    image3: String,
    regUrl: String
});

module.exports = mongoos.model('ArrayDataModel',arrayDataModel);