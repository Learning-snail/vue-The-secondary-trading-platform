const {Schema} = require('./mongoose')
const ObjectId =Schema.Types.ObjectId
const commentSchema = new Schema({
    article:{
        type:ObjectId,
        ref:'shopinfos'
    },
    from:{
        type:ObjectId,
        ref:'users'
    },
    author:{
      type:ObjectId,
        ref:'users'
    },
    content:String
},{
    versionKey:false,
    timestamps:{
        createdAt: "created"
    }})


module.exports = commentSchema