import React from 'react'
import { useState } from 'react'

const Task = ({task,toggleTask, deleteTask, editTask}) => {
    const [isediting, setIsEditing]=useState(false)
    const [title, setTitle]=useState(task.title)


const handletoggleTask=()=>{
      toggleTask(task.id) 
}  

const handleEditTask=()=>{
    editTask(task.id, {title})
    setIsEditing(false)
}

const handleCancelEdit=()=>{
    setTitle(task.title)
    setIsEditing(false)
}

const handledeleteTask=()=>{
    deleteTask(task.id)
} 


  return (
    <div>
         {
            isediting?(
                <div className='edit_form'>
                    <input className='edit_input' type='text' value={title} 
                    onChange={(e)=>setTitle(e.target.value)}/>
                    <button onClick={handleEditTask}>save</button>
                    <button onClick={handleCancelEdit}>cancel</button>

                </div>
            ):(
                <div className='task_container'>

                <span  className='single_task' style={{ textDecoration: task.completed ? 'line-through':'none'}}  
                 onClick={handletoggleTask}>{task.title}</span>
                 <div className='task_button'>
                 <button className='edit' onClick={()=>setIsEditing(true)}>Edit</button>
                <button className='delete' onClick={handledeleteTask}>delete</button>
                </div>
             </div>
            )
         } 

</div>

  )
}

export default Task