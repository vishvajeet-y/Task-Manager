import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteTask } from '../../action/task'


const TaskItem=(props) =>{
    const {task}=props
    return (
        <div className="container mb-1">
        <div className="card card-body">
        <h3 className="text-center">{task.name}</h3> 
        <p className="lead">{task.description}</p>
        <div className="btn-group">
        <Link className="btn btn-secondary me-4" to={`/edit-task/${task._id}`}>Edit</Link>
        <button className="btn btn-danger ms-auto" onClick={(e)=>{props.deleteTask(task._id)}}>Delete</button>
        </div>

        </div>
            
        </div>
    )
}

export default connect(null,{deleteTask})(TaskItem)
