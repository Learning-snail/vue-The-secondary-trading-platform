const koa=require('koa')
const router = require('./router/routers')
const body =require('koa-body')
const static = require('koa-static')
const {join} = require('path')
const cors = require('@koa/cors')
const session =require('koa-session')
const app = new koa
app.keys=['王']
//session的配置对象
const CONFIG = {
    key:"Sid",
    maxAge:36e5,
    signed:true,
    rolling:true
}
// app.use(formidable())
//注册session
app.use(session(CONFIG,app))
app.use(cors())
app.use(static(join(__dirname,'public')))
app.use(body())








app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3001,"127.0.0.1",()=>{
    console.log("监听3001");
})