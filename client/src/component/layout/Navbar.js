import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { logoutUser } from '../../action/auth' 

const Navbar=(props)=> {
    const {isAuthenticate}=props.auth

      const onLogoutClick=(e)=>{
            e.preventDefault()
            props.logoutUser()
      }
    
          const guestLinks=  ( <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <Link to="/register" className="nav-link">Signup</Link>
          </li>
          <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          </ul>)

          const authLinks=(
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link to="/add-task" className="nav-link">AddTask</Link>
            </li>
            <li className="nav-item">
            <button onClick={onLogoutClick} className="btn nav-link">Logout</button>
            </li>
            </ul>
          )
      

    return (
       <nav className="navbar navbar-expand-sm  navbar-dark bg-primary mb-4">
       <div className="container">
       <Link to='/' className="navbar-brand">Task Manager</Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobilenav" >
    
 
       <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="mobilenav">
      {isAuthenticate?authLinks:guestLinks}
       </div>
       </div>
       
       </nav>
    )
}

const mapStateToProps=(state)=>({
    auth:state.auth
})

export default connect(mapStateToProps,{logoutUser})(Navbar)
