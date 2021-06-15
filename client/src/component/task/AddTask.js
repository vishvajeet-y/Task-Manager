import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {addTask} from '../../action/task'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import TextFieldGroup from '../common/TextFieldGroup'
const AddTask=(props) =>{
    const [name,setname]=useState('')
    const [description,setdesc]=useState('')
    const [error,seterror]=useState({})
  
    useEffect(()=>{
        seterror(props.error)
    },[props.error])
   


     const onSubmit=(e)=>{
                 e.preventDefault()
                 const descData={
                     name,
                     description
                 }
               //  console.log('description',descData)
               props.addTask(descData,props.history)
     }

    return (
        <div className="AddTask">
        <div className="container">
        <div className="row">
        <div className="col-md-8 m-auto">
        <h1 className="display-4 text-center">Add Task</h1>
        <p className="lead text-center">add your task</p>
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
    error:state.errors
})

export default connect(mapStateToProps,{addTask})(withRouter(AddTask))
