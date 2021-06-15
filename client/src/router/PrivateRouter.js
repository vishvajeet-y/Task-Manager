import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
const PrivateRouter=({
auth,
component:Component,
...rest
}) =>{
    return (
        <div>
            <Route
              {...rest}
              component={(props)=>(
                  auth.isAuthenticate?(<Component {...props}/>):(<Redirect to="/login"/>)
              )

              }
            />
        </div>
    )
}

const mapStateToProps=(state)=>({
    auth:state.auth
})

export default connect(mapStateToProps)(PrivateRouter)
