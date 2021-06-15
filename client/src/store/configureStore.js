import {combineReducers,createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import errorReducer from '../reducer/error'
import authReducer from '../reducer/auth'
import taskReducer from '../reducer/task'

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
const configureStore=()=>{
    const store=createStore(combineReducers({
        errors:errorReducer,
        auth:authReducer,
        task:taskReducer
    }),
    
    composeEnhancer(applyMiddleware(thunk))
    )
      return store
}
export default configureStore