import {GET_TASKS,TASK_LOADING,DELETE_TASK, GET_TASK} from '../action/types'
const intialState={
    task:{},
    tasks:[],
    loading:false
}
const task=(state=intialState,action)=> {
    switch(action.type){
      
        case GET_TASKS:
            return {
                ...state,
                tasks:action.payload,
                loading:false
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks:state.tasks.filter(task=>task._id!==action.payload._id)
            }    
        case TASK_LOADING:
            return {
                ...state,
                loading:true
            }
        case GET_TASK:
            return {
                ...state,
                task:action.payload,
                loading:false
            }    
        default:
            return state
    }
}

export default task
