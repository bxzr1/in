import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: [
        // { id: new Date(), text: 'Task alpha', completed: false },
        // { id: new Date(), text: 'Task beta', completed: true },
    ],
    reducers: {
        addTodo: (state,action) => {
            state.push({
                id: new Date(),
                ...action.payload
            })
        },
        completeTodo: (state,action) => {
            const todo = state.find(td => td.id === action.payload);
            if (todo) {
                todo.completed = true;
            }
        }
    }
})

export const selectTodos = (state) => state.todos; // array of obj
export const { addTodo, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;