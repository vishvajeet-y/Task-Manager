import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import jwtDecode from 'jwt-decode'
import Navbar from '../component/layout/Navbar'
import Login from '../component/auth/Login'
import Register from '../component/auth/Register'
import Landing from '../component/layout/Landing'
import Dashboard from '../component/dashboard/Dashboard'
import PageNotFound from '../component/not-found/NotFound'
import PrivateRouter from './PrivateRouter'
import configureStore from '../store/configureStore'
import setAuthToken from '../utils/setAuthToken'
import { logoutUser, setcurrentUser } from '../action/auth'
import AddTask from '../component/task/AddTask'
import EditTask from '../component/task/EditTask'

const store=configureStore()

if(localStorage.jwtToken){
    //set axios request header to token
    setAuthToken(localStorage.jwtToken)
    //decode token
    const decoded=jwtDecode(localStorage.jwtToken)
    //set current user status
    store.dispatch(setcurrentUser(decoded))

     const currentTime=Date.now()/1000
    
     if(decoded.exp<currentTime){
         //if token expire 
         store.dispatch(logoutUser())
         window.location.href="/login"
     }

}



const AppRouter=()=> {
    return (
        <div>
        <Provider store={store}>
            <BrowserRouter>
            <Navbar />
            <Switch>
             <Route exact path="/" component={Landing} />
             <Route exact path='/register' component={Register}/>
             <Route exact path='/login' component={Login} />
             <PrivateRouter exact path='/dashboard' component={Dashboard} />
             <PrivateRouter exact path='/add-task' component={AddTask} />
             <PrivateRouter exact path='/edit-task/:task_id' component={EditTask} />
             <Route component={PageNotFound}/>
             </Switch>
             </BrowserRouter>
             </Provider>
        </div>
    )
}

export default AppRouter
