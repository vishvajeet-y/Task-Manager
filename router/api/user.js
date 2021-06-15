const express=require('express')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../../model/User')
const auth=require('../../middleware/authorization')
const validateRegister=require('../../Validation/validateRegister')
const validateLogin=require('../../Validation/validateLogin')
require('dotenv').config()

const router=express.Router()
 
//@ POST api/user/register
//@desc Register User
//@ Public

router.post('/register',async(req,res)=>{
       const {errors,isValid}=validateRegister(req.body)
       if(!isValid){
        return   res.status(400).json(errors)
       }
       const user= await User.findOne({email:req.body.email})
        if(user){
            errors.email='Email already exist'
           return res.status(404).json(errors)
        }
        try{
            const newUser=new User({...req.body})

            await newUser.save()  
           res.status(200).json(newUser)
        }
        catch(e){
            res.status(500).json(e)
        }

})

//@ POST api/user/login
//@desc Register User
//@ Public

router.post('/login',async(req,res)=>{
      
      const {errors,isValid}=validateLogin(req.body)
      if(!isValid){
        return   res.status(400).json(errors) 
      }
      const {email,password}=req.body
      const user=await User.findOne({email})
      if(!user)
     { 
        errors.Email='User not found' 
        return res.status(400).json(errors)
    }

      //Hash password
     const isMatch= await bcrypt.compare(password,user.password)
        if(isMatch){
            //user matched
            const payload={
              id:user.id,
              name:user.name
            }
            //sign token
           
          const token=await  jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:3600})

            return res.status(200).json({
                success:true,
                token:'Bearer '+token
            })
        }
        errors.Password='Password incorrect'
        return res.status(400).json(errors)
     
})
//@ POST api/user/
//@desc Register User
//@ Private

router.get('/',auth,async(req,res)=>{
   // console.log(req.user)
   res.json(req.user)
})



module.exports=router