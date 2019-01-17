const mongoos=require('mongoose');

const eventmodel = mongoos.Schema({
    _id: mongoos.Schema.Types.ObjectId,
    name: String,
    desc: String,
    imageUrl: String
});

module.exports = mongoos.model('Event',eventmodel);