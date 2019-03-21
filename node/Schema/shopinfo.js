const {Schema} = require('./mongoose')
const ObjectId = Schema.Types.ObjectId
const shopinfo = new Schema({
    imgUrl:String,
    shopname:String,
    shopdetail:String,
    price:String,
    yuanjia:String,
    select:String,
    myaddress:String,
    iphone:Number,
    qq:Number,
    weixin:String,
    Userid:{
        type:ObjectId,
        ref:'users'
    }

},{
    versionKey:false,
    timestamps:{
        createdAt: "created"
    }
})

shopinfo.post('remove',doc=>{
    const {db} = require('../Schema/mongoose')
    const commentSchema = require('../Schema/comment')
    const Comment = db.model('comments',commentSchema)
    Comment.find({article:doc._id})
        .then(data=>{
            data.forEach(v=>{
                v.remove()
            })
        })

})

module.exports = shopinfo