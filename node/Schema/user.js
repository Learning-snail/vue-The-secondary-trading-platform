const {Schema} = require('./mongoose')
const userschema = new Schema({
    password:String,
    username:String,
    avatar:{
        type:String,
        default:"/avatar/default.jpg"
    },
    name:String,
    sex:String,
    birthday:String,
    cityinfo:String,
    want:String

},{
    versionKey:false
})
userschema.post("remove",doc=>{
    const {db} = require('../Schema/mongoose')
    const shopinfoSchema = require('../Schema/shopinfo')
    const Shopinfo=db.model('shopinfos',shopinfoSchema)

    const wantSchema = require('../Schema/want')
    const Want=db.model('wants',wantSchema)
    Want.find({user:doc._id}).then(data=>{
            data.forEach(v=>{v.remove()})
        }
    )

    const CommentSchema = require('../Schema/comment')
    const Comment=db.model('comments',CommentSchema)
    Comment.find({from:doc._id}).then(data=>{
            data.forEach(v=>{v.remove()})
        }
    )
    Comment.find({author:doc._id}).then(data=>{
            data.forEach(v=>{v.remove()})
        }
    )
    Shopinfo.find({Userid:doc._id}).then(data=>{
        data.forEach(v=>{
            v.remove()
        })
    })

})
module.exports = userschema