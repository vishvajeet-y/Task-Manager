import React ,{useEffect}from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
const Landing=(props)=> {
    const {isAuthenticate}=props.auth
    useEffect(() => {
        if(isAuthenticate)
        props.history.push('/dashboard')
    }, [isAuthenticate,props.history])
    return (
        
        <div className="landing">      
            <div className="dark-overlay landing-inner text-light">
            <div className="container">
            <div className="row">
            <div className="col-md-12 text-center">
         
            <h1 className="display-4">Generic</h1>
            <p className="lead">
             Build signup and login
            </p>
            <hr />
            
            <Link to="/register" className="btn btn-lg btn-primary me-2">Signup</Link>
            <Link to="login" className="btn btn-lg btn-secondary mt-100">Login</Link>
            
           
            </div>
            
            </div>
            
            
            </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>({
    auth:state.auth
})

export default connect(mapStateToProps)(Landing)
