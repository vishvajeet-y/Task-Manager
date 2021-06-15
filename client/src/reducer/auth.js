import {GET_USER} from '../action/types'
import isEmpty from '../utils/isEmpty'
const intialState={
    isAuthenticate:false,
    user:{}
}

const auth=(state=intialState,action) =>{
  switch(action.type){
      case GET_USER:
        return {
          ...state,
            isAuthenticate:!isEmpty(action.payload),
            user:action.payload
        }
      default:
          return state
  }
}

export default auth
