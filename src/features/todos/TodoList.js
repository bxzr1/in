import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { selectTodos } from "./todosSlice";
import TodoForm from "../../components/TodoForm/TodoForm";
import './TodoList.css';
import '../features.css';


function TodoList() {
    const todos = useSelector(selectTodos);
    
    return (
        <div className='TodoList'>
            <TodoForm />
            <h3>Currently to-do:</h3>
            {
                todos.length < 1
                    ? <p>Nothing to do today!</p>
                    : (
                        <div className='Todos'>
                            {todos.map(td => <Todo todo={td} />)}
                        </div>
                    )
            }
        </div>
    )
}

export default TodoList;