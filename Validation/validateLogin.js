const validator=require('validator')
const isEmpty = require('./isEmpty')

const validateLoginInput=(data)=>{
    let errors={}
    data.email=!isEmpty(data.email)?data.email:''
    data.password=!isEmpty(data.password)?data.password:''
  
    if(!validator.isEmail(data.email))
    {
        errors.Email='Email is invalid'
    }
    
    if(validator.isEmpty(data.email))
    {
        errors.Email='Email field is required'
    }

    if(validator.isEmpty(data.password))
    {
        errors.Password='Password  field is required'
    }
    
    return {
        errors,
        isValid:isEmpty(errors)
    }
}

module.exports=validateLoginInput