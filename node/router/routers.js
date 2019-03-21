const Routers = require('koa-router')
const router =new Routers
const user = require('../control/user')
const shop=require('../control/shopinfo')
const upload = require('../utils/upload')
const avatar = require('../utils/avatar')
const comment =require('../control/comment')
const want = require('../control/want')
//注册
router.post('/user/reg',user.reg)
//登录
router.post('/user/login',user.login)
//物品上传
router.post('/shop/shopimg',upload.single("file"),async(ctx,next)=>{
    ctx.body = {
        filename: ctx.req.file.filename//返回文件名
    }})
router.post('/shop/shopinfo',shop.shopinfo)
//物品显示
router.post('/shop/shopget',shop.shopget)
//商品显示
router.post('/shop/detail',shop.shopdetail)
//评论上传
router.post('/user/comment',comment.comment)
//获取所有商品信息
router.get('/shop/alldetail',shop.alldetail)
//显示我发布的商品
router.get('/user/myshop',user.myshop)
//删除我发布的
router.delete('/shop/delete',shop.delete)
//查询评论
router.get('/comment/comment',comment.sercomment)
//上传我的头像
router.post('/user/myavatar',avatar.single("file"),async(ctx,next)=>{
    ctx.body = {
        filename: ctx.req.file.filename//返回文件名
    }})
//上传我的信息
router.post('/user/myinfo',user.myinfo)
//物品查询
router.get('/shop/search',shop.search)
//上传我想要的
router.post('/want/want',want.want)
//显示我想要的
router.get('/want/mywant',want.mywant)
//删除我想要的
router.delete('/want/delete',want.delete)
module.exports = router