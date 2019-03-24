const {db} = require('../Schema/mongoose')
const userSchema = require('../Schema/user')
const User=db.model('users',userSchema)
exports.fn=async cxt=>{
    await User.find({username:"admin"},(err,data)=>{
        if( err ){
            return err
        }
        if( data.length===0 ){
            const _user=new User({
                username:"admin",
                password:"admin",
            })
            _user.save((err,data)=>{
                if( err )return err
            })
        }else{
            console.log("已被注册");
        }
    })
}
exports.userlist = async cxt=>{
    const data=await User.find().exec()
    cxt.body={
        code:0,
        count:data.length,
        data,
    }
}
exports.del = async cxt=>{
    const parmsId =cxt.query.id
    let res={
        state:1,
        message:"删除成功"
    }
    await User.findById(parmsId)
        .then(data=>{
            data.remove()
        })
        .catch(err=>{
            res={
                state:0,
                message:"删除失败"
            }
        })
    cxt.body = res
}