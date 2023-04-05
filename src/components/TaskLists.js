import React from 'react'
import AddTaskForm from './AddTaskForm'
import Task from './Task'
import { connect } from 'react-redux'
import { toggleTask,deleteTask, editTask} from '../actions/taskactions'
import "./style.css"

const TaskLists = ({tasks, toggleTask, deleteTask, editTask}) => {

  return (
    <div className='task_list'>
      <AddTaskForm/>
      {tasks.map(task=>(
        <Task key={task.id} task={task} toggleTask={toggleTask} 
        deleteTask={deleteTask} editTask={editTask}/>
      ))}
    </div>
  )
}

const mapStateToProps= state =>({
   tasks:state.tasks,
})

const mapDispatchToProps={
  toggleTask,
  deleteTask,
  editTask
}  


export default connect (mapStateToProps,mapDispatchToProps) (TaskLists)