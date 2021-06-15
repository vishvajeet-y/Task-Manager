import axios from 'axios'
import jwtDecode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'
import {CLEAR_ERRORS, GET_ERRORS,GET_USER} from './types'
//Register User
export const Adduser=(userdata,history)=>{
   return (dispatch)=>{
       dispatch({type:CLEAR_ERRORS})
        axios.post('/api/user/register',userdata).then((res)=>{
           //console.log(res.data)
           history.push('/login')
        }).catch((err)=>{
          //  console.log(err.response.data)
           dispatch({
               type:GET_ERRORS,
               payload:err.response.data
           })
        })
    }
}

//Login User

export const Loginuser=(user)=>{
   return (dispatch)=>{
       dispatch({type:CLEAR_ERRORS})
        axios.post('/api/user/login',user).then(res=>{
                 //console.log(res.data)
                 const {token}=res.data
                 //save token to localstorage
                localStorage.setItem('jwtToken',token)

                // set header of request
                setAuthToken(token)

                const decode=jwtDecode(token)
                //console.log(decode)
                dispatch(setcurrentUser(decode))
                
         })
        .catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        })
    }
}

//Logout User

export const logoutUser=()=>{
    return (dispatch)=>{
         //delete token from localstorage
        localStorage.removeItem('jwtToken')
            //remove token from header of axios request
            setAuthToken()
        dispatch({
            type:GET_USER,
            payload:{}
        })    
    }
}

export const setcurrentUser=(decoded)=>({
    type:GET_USER,
    payload:decoded
})