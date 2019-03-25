const {db}= require('../Schema/mongoose')
const shopinfoschema = require('../Schema/shopinfo')
const Shop = db.model('shopinfos',shopinfoschema)

// 物品上传
exports.shopinfo =async (ctx)=>{
    const data = ctx.request.body
    await new Promise(((resolve, reject) =>{
        const _shop = new Shop(data)
            .save(((err,data)=>{
            if( err ){
                return reject(err)
            }else{
                resolve(data)
            }
        }))
    } ) )
        .then(res=>{
            ctx.body={message:'上传成功',status:1}
        })
        .catch(err=>{
            ctx.body={message:'上传失败',status:0}
        })


}

//物品显示
exports.shopget = async (ctx)=>{
    const select = ctx.request.body.cateName
    let p=ctx.request.body.p
    --p
    if( select==='全部分类' ){
        const maxNum = await Shop.estimatedDocumentCount((err,num)=>err?console.log(err):num)
        const data = await Shop
            .find()
            .skip(15*p)
            .limit(15)
            .then(data=>data)
            .catch(err=>{
                console.log(err);
            })
        ctx.body={
            maxNum,
            data
        }
    }else{
        const maxNum = await Shop.find({select})
        const data=await Shop.find({select})
            .skip(15*p)
            .limit(15)
            .then(data=>data)
            .catch(err=>{
                console.log(err);
            })
        ctx.body={
            data,
            maxNum:maxNum.length
        }
    }

}
//商品显示
exports.shopdetail = async (ctx)=>{
    const data = ctx.request.body
    const imgUrl = data.params
    ctx.body=await Shop.find({imgUrl}).populate('Userid',{username:'username',name:'name'})
}

//显示所有物品
exports.alldetail = async (ctx)=>{
    let n = ctx.query.n||''
    let p = ctx.query.p||1
    const maxNum = await Shop.estimatedDocumentCount((err,num)=>err?console.log(err):num)
    --p
    if( n ){
        const data = await Shop
            .find()
            .sort('-created')
            .skip(15*p)
            .limit(15)
            .then(data=>data)
            .catch(err=>{
                console.log(err);
            })
        ctx.body={
            maxNum,
            data
        }
    }else{
        const data = await Shop
            .find()
            .sort('created')
            .skip(15*p)
            .limit(15)
            .then(data=>data)
            .catch(err=>{
                console.log(err);
            })
        ctx.body={
            maxNum,
            data
        }
    }



}

//删除我发布的
exports.delete = async (ctx)=>{
    const _id = ctx.query.id
    let res={
        state:1,
        message:"删除成功"
    }
    await Shop.findById(_id)
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

//物品查询
exports.search = async (ctx)=>{
    let keywords = ctx.query.keywords
    let p =ctx.query.p
    let city = ctx.query.city
    if( city==='全球' ){
        city=''
    }
    --p
    let query = new RegExp(keywords,'i')
    let params=new RegExp(city,'i')
    const maxNum = await Shop.find({$or:[{'shopname':query,'myaddress':params}]})
        // .then(data=>{
        //     data.find({$or:[{'myaddress':params}]})
        // })
        .then(data=>data.length)
    const data = await Shop.find({$or:[{'shopname':query,'myaddress':params}]})
        // .then(data=>{
        //     data.find({$or:[{'myaddress':params}]})
        // })
        .sort('-created')
        .skip(15*p)
        .limit(15)
        .then(data=>data)
        .catch(err=>{
            console.log(err);
        })
    ctx.body={
        maxNum,
        data
    }
}
