import React,{useState,useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Adduser} from '../../action/auth'
import TextFieldGroup from '../common/TextFieldGroup'
const Register=(props)=> {
   const {isAuthenticate}=props.auth
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [password2,setpassword2]=useState('')
    const [error,seterror]=useState({})
   
    useEffect(()=>{
      props.history.push('/dashboard')
    },[isAuthenticate,props.history])
     
    useEffect(()=>{
     // console.log(props.error)
      seterror(props.error)
     
    },[props.error])

    const onSubmit=(e)=>{
        e.preventDefault()
        const userData={
          name,
          email,
          password,
          password2
        }
       // console.log('form is submitted',userData)
       props.Adduser(userData,props.history)
    }
 
    return (
        <div className="register">
         <div className="container">
         <div className="row">
           <div className="col-md-8 m-auto">
           <h1 className="display-4  text-center">Sign Up</h1>
           <p className="lead  text-center">Create your account</p> 
           <form noValidate onSubmit={onSubmit}>
             <TextFieldGroup
              type="text" 
              name="name" 
              placeholder="Name"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
              error={error.name}
             />
             <TextFieldGroup 
             type="email" 
             name="email" 
             placeholder="Email Address"
             value={email}
             onChange={(e)=>{setemail(e.target.value)}}
             error={error.email}
             />
             <TextFieldGroup 
             type="password" 
             name="password" 
             placeholder="Password"
             value={password}
             onChange={(e)=>{setpassword(e.target.value)}}
             error={error.password}
             />
             <TextFieldGroup
             type="password" 
             name="password2" 
             placeholder="Confirm Password"
             value={password2}
             onChange={(e)=>{setpassword2(e.target.value)}}
             error={error.password2}
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

export default connect(mapStateToProps,{Adduser})(withRouter(Register))
