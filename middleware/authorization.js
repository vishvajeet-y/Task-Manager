const jwt=require('jsonwebtoken')
const User=require('../model/User')
require('dotenv').config()
const authorization=async(req,res,next)=>{
    try{         
         const token=req.header('Authorization').replace('Bearer ','')
        // console.log(token) 
         const decoded=  jwt.verify(token,process.env.SECRET_KEY)
        // console.log(decoded)
         const user=await User.findById(decoded.id)
         if(!user)
         {
          throw new Error()
         }
         else{
             req.user=user
             next()
         }
        }
        catch(e){
           res.status(401).json({error:'Unauthorized'})
        }


}

module.exports=authorization