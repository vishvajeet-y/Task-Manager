const express=require('express')
const router=express.Router()
const Task=require('../../model/Task')
const auth=require('../../middleware/authorization')
const validateTask=require('../../Validation/validateTask')

router.post('/',auth,async(req,res)=>{
   const {errors,isValid}=validateTask(req.body)
   if(!isValid)
   {
       return res.status(400).json(errors)
   }
    
    try{
       
        const newtask={
            description:req.body.description,
            user:req.user.id,
            name:req.body.name
        }
        // console.log(newtask)
         const task=new Task(newtask)
         await task.save()
         //console.log(task)
        res.status(200).json(task)
    }
    catch(err){
        res.status(400).json(err)
    }


})

//delete task
router.delete('/:task_id',auth,async(req,res)=>{
   
    try{
        
         const task=await Task.findByIdAndRemove(req.params.task_id)
         //console.log(task)
         res.status(200).json(task)
    }
    catch(err){
             res.status(400).json(err)
    }
})




//edit task
 
router.post('/:task_id',auth,async(req,res)=>{
    try{
         const updateTask={
             name:req.body.name,
            description:req.body.description
         }
         const task=await Task.findByIdAndUpdate(
            {_id:req.params.task_id},
            {$set:updateTask},
            {new:true}
             )
         console.log(task)
         res.status(200).json(task)
    }
    catch(err){
             res.status(400).json(err)
    }
})

//get tasks

router.get('/',auth,async(req,res)=>{
    try{
        const tasks=await Task.find({user:req.user.id})
        res.status(200).json(tasks)
    }
    catch(err){
      res.status(400).json(err)
    }
  
})

//Get task by id
router.get('/:task_id',auth,async(req,res)=>{
    try{
        const task=await Task.findById(req.params.task_id)
        //console.log(task)
        res.status(200).json(task)
    }
    catch(err){
      res.status(400).json(err)
    }
  
})

module.exports=router