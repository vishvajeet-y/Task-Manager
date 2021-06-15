const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

  //Hash the plain text password before saving
  UserSchema.pre('save',async function(next){
    const user=this
    if(user.isModified('password'))
    {
       user.password=await bcrypt.hash(user.password,8)
    }
    next()
})

const User=mongoose.model('user',UserSchema)
module.exports=User