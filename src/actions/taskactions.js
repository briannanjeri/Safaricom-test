import { ADD_TASK,EDIT_TASK, DELETE_TASK, TOGGLE_COMPLETED} from "./type";

export const addTask=(task)=>{
  return{
    type:ADD_TASK,
    payload:task
  }
}

export const editTask=(id, updatedTask)=>{
    return {
        type:EDIT_TASK,
        payload:{
            id,
            updatedTask
        }
    }
}

export const deleteTask=(id)=>{
    return{
        type:DELETE_TASK,
        payload:id
    }
}

export const toggleTask=(id)=>{
    return{
        type:TOGGLE_COMPLETED,
        payload:id
    }
}