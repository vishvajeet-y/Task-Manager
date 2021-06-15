const mongoose=require('mongoose')

const TaskSchema=mongoose.Schema({
      user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'user'
      },
      name:{
          type:String
      },
      description:{
          type:String,
      }
})

const Task=mongoose.model('task',TaskSchema)
module.exports=Task