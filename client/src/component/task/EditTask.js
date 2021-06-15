import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {getTask,editTask} from '../../action/task'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import TextFieldGroup from '../common/TextFieldGroup'
const EditTask=(props) =>{
   
    const [name,setname]=useState('')
    const [description,setdesc]=useState('')
    const [error,seterror]=useState({})

    useEffect(()=>{
        props.getTask(props.match.params.task_id)
     
    },[])
  
    useEffect(()=>{
        seterror(props.error)
    },[props.error])

    
     const {task}=props.task
 
     useEffect(()=>{
        
         if(Object.keys(task).length>0){
            setname(task.name)
            setdesc(task.description)
         }
        
     },[task])
        
  

     const onSubmit=(e)=>{
                 e.preventDefault()
                 const descData={
                     name,
                     description
                 }
                // console.log('description',descData)
               props.editTask(descData,props.match.params.task_id,props.history)
     }

     return (
        <div className="AddTask">
        <div className="container">
        <div className="row">
        <div className="col-md-8 m-auto">
        <h1 className="display-4 text-center">Edit Task</h1>
        <p className="lead text-center">edit your task</p>
        <form onSubmit={onSubmit}>
        <TextFieldGroup
        name="name"
        type="text"
        placeholder="Name of task"
        value={name}
        onChange={(e)=>{setname(e.target.value)}}
        error={error.name}
        />
         <TextAreaFieldGroup
          name="description"
          placeholder="Description of task"
          value={description}
          onChange={(e)=>{setdesc(e.target.value)}}
          error={error.description}
         />
         <input type="submit" value="Submit" className="btn btn-primary col-12 mt-4"/>
        </form>
        </div>
        </div>
        </div>
           
        </div>
    )
}

const mapStateToProps=(state)=>({
    error:state.errors,
    task:state.task
})

export default connect(mapStateToProps,{getTask,editTask})(withRouter(EditTask))
