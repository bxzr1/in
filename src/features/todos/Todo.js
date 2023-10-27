import React from "react";
import './Todo.css';
import '../features.css';
import { useDispatch } from "react-redux";
import { completeTodo } from "./todosSlice";

function Todo({todo}) {
    const dispatch = useDispatch();

    const handleComplete = (e) => {
        e.preventDefault();
        dispatch(completeTodo(todo.id));
    }
    return (
        <div className='Todo'>
            <p className='Todo-content'>{todo.text}</p>
            <button 
                className={todo.completed ? 'Todo-completed' : 'Todo-incomplete'}
                onClick={handleComplete}>
                {todo.completed
                    ? '✅'
                    : '🔲'}
            </button>
        </div>
    )
}

export default Todo;