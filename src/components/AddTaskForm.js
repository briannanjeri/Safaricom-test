import { addTask } from '../actions/taskactions'

import React, { useState } from 'react'
import { connect} from 'react-redux'

const AddTaskForm = ({addTask}) => {
  const [title, setTitle]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
  
    if(title.trim()){
      addTask({
        id:Math.random().toString(36).substr(2,9),
        title,
        completed:false
      });
      setTitle('');
    } 
      
  };

  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' className='form_input' name='title' value={title} 
            onChange={(e)=>setTitle(e.target.value)} ></input>

            {/* <input type='text' name='description' value={description} 
            onChange={(e)=>setDescription(e.target.description)}></input> */}
            <button type='submit'>Add Task</button>

        </form>
    </div>
  )
}

const mapDispatchToProps={
  addTask
}

export default connect(null, mapDispatchToProps)(AddTaskForm)