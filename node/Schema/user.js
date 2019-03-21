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
module.exports = userschema