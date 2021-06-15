const validator=require('validator')
const isEmpty=require('./isEmpty')

const validateTask=(data)=> {
     const errors={}
     data.name=!isEmpty(data.name)?data.name:''
    data.description=!isEmpty(data.description)?data.description:''
    
    if(!validator.isLength(data.name,{min:3,max:10}))
    {
        errors.name='Name must be between 3 to 10 character'
    }
    if(validator.isEmpty(data.name))
    {
        errors.name='Name Field is required'
    }

    if(!validator.isLength(data.description,{min:3,max:100}))
    {
        errors.description='Description must be between 3 to 100 character'
    }
    if(validator.isEmpty(data.description))
    {
        errors.description='Description Field is required'
    }
     return {
        errors,
         isValid:isEmpty(errors)

     }
}

module.exports=validateTask
