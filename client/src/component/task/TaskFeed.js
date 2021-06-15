import React from 'react'
import TaskItem from './TaskItem'
const TaskFeed=(props) =>{
    const {tasks}=props
    return (
       tasks.map(task=><TaskItem key={task._id} task={task} />)
    )
}

export default TaskFeed
