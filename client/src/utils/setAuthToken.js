import axios from 'axios'


const setAuthToken=(token)=> {
  //if token exist then it apply to every request
    if(token){
       axios.defaults.headers.common['Authorization']=token
  }
  else{
      //Delete auth Header
      delete axios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken
