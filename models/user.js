import {Schema,model} from  'mongoose'

const userRegisterschema = new Schema ({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    number:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    type:{
        type:String,
        default:"user",
        enum:["user", "seller", "admin"]
    }
},{timestamps:true})

const User = model('user', userRegisterschema)
export default User;

