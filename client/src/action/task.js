import axios from 'axios'
import { CLEAR_ERRORS, GET_ERRORS,GET_TASKS, TASK_LOADING, 
DELETE_TASK,EDIT_TASK,GET_TASK} from './types'

//Add Description
export const addTask=(taskData,history)=>{

    return (dispatch)=>{
        dispatch({type:CLEAR_ERRORS})
       axios.post('/api/task',taskData).then(res=>{
             history.push('/dashboard')
       }).catch(err=>{
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
       })
    }
}

//Get All tasks

export const getTasks=()=>{
    return (dispatch)=>{
        dispatch(setTaskLoading())
        axios.get('/api/task').then(res=>{
           // console.log(res.data)
            dispatch({
                type:GET_TASKS,
                payload:res.data
            })
        }).catch(err=>{
            dispatch({
                type:GET_TASKS,
                payload:null
            })
        })
    }
}

//get task by id
export const getTask=(task_id)=>{
    
    return (dispatch)=>{
        dispatch({type:CLEAR_ERRORS})
        dispatch(setTaskLoading())
        axios.get(`/api/task/${task_id}`).then(res=>{
            //console.log(res.data)
            dispatch({
                type:GET_TASK,
                payload:res.data
            })
        }).catch(err=>{
            dispatch({
                type:GET_TASK,
                payload:{}
            })
        })
    }
}


//editTask

export const editTask=(task_data,task_id,history)=>{
    return (dispatch)=>{
        
    axios.post(`/api/task/${task_id}`,task_data).then(res=>{
         dispatch({
             type:EDIT_TASK,
             payload:res.data
         })
         history.push('/dashboard')
    }).catch(err=>{
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    })
    }
}

//deleteTask

export const deleteTask=(task_id)=>{
    
    return (dispatch)=>{

        axios.delete(`/api/task/${task_id}`).then(res=>{
          
             dispatch({
                 type:DELETE_TASK,
                 payload:res.data
             })
        }).catch(err=>{
           dispatch({
               type:GET_ERRORS,
               payload:err.response.data
           })
        })

    }
}

export const setTaskLoading=()=>{
    return{
        type:TASK_LOADING
    }
}