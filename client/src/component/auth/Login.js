
import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import TextFieldGroup from '../common/TextFieldGroup'
import { Loginuser } from '../../action/auth'

const Login=(props)=> {
  const {isAuthenticate} = props.auth
   const [email,setemail]=useState('')
   const [password,setpassword]=useState('')
   const [error,seterror]=useState('')

   useEffect(()=>{
     if(isAuthenticate)
     props.history.push('/dashboard')
   },[isAuthenticate,props.history])
   
    useEffect(()=>{
      seterror(props.error)
    },[props.error])
    
     const onSubmit=(e)=>{
         e.preventDefault()
         const user={
           email,
           password
         }
         props.Loginuser(user)
        // console.log('form is submitted')
     }

    return (
        <div className="register">
         <div className="container">
         <div className="row">
           <div className="col-md-8 m-auto ">
           <h1 className="display-4 text-center">Log In</h1>
           <p className="lead text-center">Sign in to your account</p> 
           <form noValidate onSubmit={onSubmit}>
            
             <TextFieldGroup 
             type="email" 
             name="email" 
             placeholder="Email Address"
             value={email}
             onChange={(e)=>{setemail(e.target.value)}}
             error={error.Email}
             />
             <TextFieldGroup 
             type="password" 
             name="password" 
             placeholder="Password"
             value={password}
             onChange={(e)=>{setpassword(e.target.value)}}
             error={error.Password}
             />
           
             <input type="submit" value="Submit" className="btn btn-primary col-12 mt-4" />
           </form>
           </div>
         </div>
       
         </div>
            
        </div>
    )
}
const mapStateToProps=(state)=>({
  error:state.errors,
  auth:state.auth
})

export default connect(mapStateToProps,{Loginuser})(Login)

