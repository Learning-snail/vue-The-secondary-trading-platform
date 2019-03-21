const {db} = require('../Schema/mongoose')
const userschema = require('../Schema/user')
const User = db.model('users',userschema)
const shopinfoschema = require('../Schema/shopinfo')
const Shop = db.model('shopinfos',shopinfoschema)
//注册
exports.reg=async (ctx)=>{
    const user = ctx.request.body
    const username = user.username
    const password = user.password
    await new Promise(((resolve, reject) => {
        User.find({username},(err,data)=>{
            if( err )return reject(err)
            //说明已注册
            if( data.length!==0 ){
                return resolve('')
            }
            //说明没注册
            const _user = new User({
                username,
                password,
            })
            _user.save((err,data)=>{
                if( err ){
                    reject(err)
                }else{
                    resolve(data)
                }

            })
        })
    }))
        .then(async data=>{
            if( data ){
                // await ctx.render('isOk',{
                //     // status:'注册成功'
                // })
                ctx.body='注册成功'
            }else {
                // await ctx.render('isOk',{
                //     // status:'已被注册'
                // })
                ctx.body='已被注册'
            }
        })
        .catch(async err=>{
            // await ctx.render('isOk',{
            //     // status:'注册失败请重试'
            // })
            ctx.body='注册失败请重试'
        })
}

//登录
exports.login = async (ctx)=>{
    const user = ctx.request.body
    const username = user.username
    const password = user.password
    await new Promise(((resolve, reject) => {
        User.find({username,password},(err,res)=>{
            if( err ){
                return reject(err)
            }
            //账号存在
            if( res.length!==0 ){
               return resolve(res)
            }
            //账号不存在
            if( res.length===0){
                return resolve('')
            }
        })
    }))
        .then(async data=>{
            if( data ){
                console.log(data);
                ctx.session={
                    username,
                    uid:data[0]._id,
                    avatar:data[0].avatar,
                    name:data[0].name||''
                }
                ctx.body={
                    message:'登录成功',
                    session:ctx.session,
                    status:1
                }
            }
            else{
                ctx.body={
                    message:'账号或密码不正确',
                    status:0
                    }
            }
        })
        .catch(async err=>{
            ctx.body= '登录失败'})

}

//显示我发布的商品
exports.myshop = async (ctx)=>{
    const Userid = ctx.query.uid
    ctx.body= await Shop.find({Userid})
}

//上传我的信息
exports.myinfo = async (ctx)=>{
    let data=ctx.request.body
    await User.findOneAndUpdate({_id:data.uid},data);
    ctx.body='保存成功'
}