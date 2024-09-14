import {createSlice , nanoid} from "@reduxjs/toolkit"

const initialState =[
   todos = {id: nanoid(), text: 'I love You',},
]
 
export const  todoApp = createSlice({
    name:todoApp ,
    initialState ,
    reducers:{
        addTodoApp : (state , action)=>{
          const  todoApp =  { id: nanoid() , text : action.payload}
            state.push(action.payload)
        },
        removetodoApp  :(state , action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)

        }
    }
})


export const { addTodoApp , removetodoApp }  = todoApp.actions

export default todoApp.reducer