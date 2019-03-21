const {db} = require('../Schema/mongoose')
const userschema = require('../Schema/user')
const User = db.model('users',userschema)
const wantschema = require('../Schema/want')
const Want= db.model('Wants',wantschema)

exports.want = async (ctx)=>{
    let data = ctx.request.body
    await Want.find({user:data.user,imgUrl:data.imgUrl})
        .then(res=>{
            if( res.length===0 ){
                Want(data).save()
            }
            ctx.body='收藏成功'
        })



}

exports.mywant = async (ctx)=>{
        const Userid = ctx.query.uid
        ctx.body= await Want.find({user:Userid})
}

exports.delete = async (ctx)=>{
    const _id = ctx.query.id
    let res={
        state:1,
        message:"删除成功"
    }
    console.log(_id);
    await Want.findById(_id)
        .then(data=>{
            data.remove()
        })
        .catch(err=>{
            res={
                state:0,
                message:"删除失败"
            }
        })
    ctx.body = res
}