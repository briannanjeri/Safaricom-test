import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_COMPLETED } from "../actions/type";
const initialstate={tasks:[]}

const taskReducer=(state=initialstate, action)=>{
   switch(action.type){
       case ADD_TASK:
        return{
            ...state,
            tasks:[...state.tasks, action.payload]
        }
        case DELETE_TASK:
            const filteredtasks= state.tasks.filter(task=>task.id!==action.payload)
            return {
                ...state,
                tasks:filteredtasks
            }
        case EDIT_TASK:
            const{id,updatedTask}=action.payload;
            const updatedTasks=state.tasks.map(task=>{
                if(task.id===id){
                    return{
                        ...task,
                        ...updatedTask
                    }
                }
                else{
                    return task;
                }
                });
                return{
                    ...state, 
                    tasks:updatedTasks
                } 
         case TOGGLE_COMPLETED:
            const toggledTasks=state.tasks.map(task=>{
                if(task.id===action.payload){
                    return{
                        ...task,
                        completed:!task.completed
                    }
                }else{
                    return task
                }
            });
            return{
                ...state, tasks:toggledTasks
             }
         default:
            return state
   }
}

export default taskReducer
