const mongoos=require('mongoose');

const eventListModel = mongoos.Schema({
    _id: mongoos.Schema.Types.ObjectId,
    eventType: String,
    allData:[
        { type: mongoos.Schema.Types.ObjectId, ref: 'ArrayDataModel'}
    ]
})

module.exports = mongoos.model('EventList',eventListModel);