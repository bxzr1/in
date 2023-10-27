import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todos/todosSlice';
import './TodoForm.css';

function TodoForm() {
    const dispatch = useDispatch();
    const [ todo, setTodo ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            text: todo,
            completed: false,
        }))
        setTodo('');
    }

    return (
        <div className='TodoForm'>
            <h3 className='Todo-title'>What's on your plate today?</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={todo} 
                    onChange={(e) => setTodo(e.target.value)} 
                    className='Todo-add'
                />
            </form>
        </div>
    )
}

export default TodoForm;