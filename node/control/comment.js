const {db} =require('../Schema/mongoose')
const commentSchema = require('../Schema/comment')
const Comment = db.model('comments',commentSchema)
const shopinfoschema = require('../Schema/shopinfo')
const Shop = db.model('shopinfos',shopinfoschema)
//评论上传
exports.comment = async (ctx)=>{
    const data = ctx.request.body
    await new Promise(((resolve, reject) =>{
        const _Coment = new Comment(data)
            .save(((err,data)=>{
                if( err ){
                    return reject(err)
                }else{
                    resolve(data)
                }
            }))
    } ) )
        .then(res=>{
            ctx.body={message:'发表成功',status:1}
        })
        .catch(err=>{
            ctx.body={message:'发表失败',status:0}
        })
}
//查询评论
exports.sercomment = async (ctx) =>{
 const receive = ctx.query.r||''
 const announce = ctx.query.a||''
    if( receive ){
        ctx.body=await Comment.find({author:receive}).populate('article',{imgUrl:'imgUrl',shopname:'shopname'}).populate('from','username')


    }else{
        ctx.body=await Comment.find({from:announce}).populate('article',{imgUrl:'imgUrl',shopname:'shopname'})
    }
}
