import {GET_ERRORS,CLEAR_ERRORS} from '../action/types'


const error=(state={},action)=> {
      switch(action.type){
          case GET_ERRORS:
              return action.payload
          case CLEAR_ERRORS:
              return {}    
          default:
              return state
      }
}

export default error
