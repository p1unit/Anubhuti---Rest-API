const mongoos=require('mongoose');

const PastArray = mongoos.Schema({
    _id: mongoos.Schema.Types.ObjectId,
    name: String,
    imageUrl:String
});

module.exports = mongoos.model('PastArray',PastArray);