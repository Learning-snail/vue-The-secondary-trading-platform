const {Schema} = require('./mongoose')
const ObjectId = Schema.Types.ObjectId
const want = new Schema({
    user:{
        type:ObjectId,
        ref:'users'
    },
    shopname:String,
    price:String,
    imgUrl:String
},{
    versionKey:false,
    timestamps:{
        createdAt: "created"
    }
})

module.exports = want