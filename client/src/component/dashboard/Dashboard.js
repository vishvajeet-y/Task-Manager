import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TaskFeed from '../task/TaskFeed'
import { getTasks } from '../../action/task'
import Spinner from '../common/Spinner'

const Dashboard= (props)=> {
    const {tasks,loading}=props.task
    useEffect(()=>{
    props.getTasks()
    },[])
   
    let taskContent
   if(tasks===null||loading)
   {
    taskContent=<Spinner />     
   }
   else if(!loading&&tasks.length===0)
    { 
        
        taskContent=<div>
        <p className="lead text-center"> No Task is Present,Please add Task</p>
        </div>
    }
   else{
       taskContent=<TaskFeed tasks={tasks}/>
   }
  



    return (
        <div className="dashboard">
        <div className="container">
        <div className="row">
        <div className="col-md-8 m-auto">
        <div className="card card-body">
        <h1 className="display-4 text-center">Your Task</h1>
        <p className="lead text-center">try to complete these task</p>
        <Link className="btn btn-primary col-3 mb-4" to="/add-task">Add Task</Link>
        {taskContent}
        </div>
       
        </div>
        </div>
        </div>
            
        </div>
    )
}

const mapStateToProps=(state)=>({
    task:state.task
})

export default connect(mapStateToProps,{getTasks})(Dashboard)
