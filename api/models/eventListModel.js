const mongoos=require('mongoose');

const eventListModel = mongoos.Schema({
    _id: mongoos.Schema.Types.ObjectId,
    eventType: String,
    allData:[{
        //evntId: mongoos.Types.ObjectId,
        name: String,
        image1: String,
        imahe2: String,
        image3: String,
        regUrl: String,
    }]
})

module.exports = mongoos.model('eventlist',eventListModel);